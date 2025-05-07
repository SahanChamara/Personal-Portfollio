
import { useEffect, useRef } from 'react';

// Define types for our elements
interface GridLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  opacity: number;
}

interface DataNode {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  connections: number[];
  highlight: boolean;
  ui: boolean;
}

interface BinaryStream {
  x: number;
  characters: { char: string; y: number; opacity: number; size: number }[];
  speed: number;
}

interface ScanLine {
  position: number;
  direction: 'horizontal' | 'vertical';
  speed: number;
  opacity: number;
  width: number;
}

interface DataBox {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  values: string[];
  active: boolean;
}

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataNodes = useRef<DataNode[]>([]);
  const gridLines = useRef<GridLine[]>([]);
  const binaryStreams = useRef<BinaryStream[]>([]);
  const scanLines = useRef<ScanLine[]>([]);
  const dataBoxes = useRef<DataBox[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  
  // Color and style configuration
  const config = {
    primaryColor: 'rgba(30, 144, 255, 0.8)',      // Bright blue
    accentColor: 'rgba(0, 255, 255, 0.7)',        // Cyan
    gridColor: 'rgba(0, 100, 255, 0.2)',          // Faded blue
    binaryColor: 'rgba(0, 200, 255, 0.7)',        // Light blue
    scanColor: 'rgba(0, 255, 255, 0.4)',          // Cyan with transparency
    backgroundColor: 'rgba(0, 10, 30, 0.3)',      // Very dark blue with transparency
    uiBoxColor: 'rgba(0, 150, 255, 0.2)',         // Blue UI elements
    uiBoxBorderColor: 'rgba(0, 200, 255, 0.6)',   // Brighter blue for borders
    nodeCount: 12,                                // Number of data nodes
    gridDensity: 20,                              // Grid density
    streamCount: 16,                              // Number of binary streams
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to fill the container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize all visual elements
    function initElements() {
      // Initialize grid lines
      initGrid();
      
      // Initialize data nodes
      initNodes();
      
      // Initialize binary streams
      initBinaryStreams();
      
      // Initialize scan lines
      initScanLines();
      
      // Initialize data boxes
      initDataBoxes();
    }

    // Grid lines initialization
    function initGrid() {
      gridLines.current = [];
      
      // Create horizontal grid lines
      const gridGap = canvas.height / config.gridDensity;
      for (let i = 0; i < config.gridDensity; i++) {
        const y = i * gridGap;
        gridLines.current.push({
          x1: 0,
          y1: y,
          x2: canvas.width,
          y2: y,
          color: config.gridColor,
          opacity: i % 5 === 0 ? 0.3 : 0.1 // Make every 5th line more visible
        });
      }
      
      // Create vertical grid lines
      const gridGapX = canvas.width / config.gridDensity;
      for (let i = 0; i < config.gridDensity; i++) {
        const x = i * gridGapX;
        gridLines.current.push({
          x1: x,
          y1: 0,
          x2: x,
          y2: canvas.height,
          color: config.gridColor,
          opacity: i % 5 === 0 ? 0.3 : 0.1 // Make every 5th line more visible
        });
      }
    }
    
    // Data nodes initialization
    function initNodes() {
      dataNodes.current = [];
      for (let i = 0; i < config.nodeCount; i++) {
        const size = Math.random() * 30 + 20; // Larger nodes
        dataNodes.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          color: i % 3 === 0 ? config.accentColor : config.primaryColor,
          opacity: Math.random() * 0.5 + 0.2,
          connections: [],
          highlight: Math.random() > 0.7, // Highlight some nodes
          ui: Math.random() > 0.7 // Some nodes will have UI elements
        });
      }
      
      // Create connections between nodes - connected network effect
      for (let i = 0; i < dataNodes.current.length; i++) {
        const connectionsCount = Math.floor(Math.random() * 3) + 1;
        const connections: number[] = [];
        
        for (let j = 0; j < connectionsCount; j++) {
          let targetIdx;
          do {
            targetIdx = Math.floor(Math.random() * dataNodes.current.length);
          } while (targetIdx === i || connections.includes(targetIdx));
          
          connections.push(targetIdx);
        }
        
        dataNodes.current[i].connections = connections;
      }
    }
    
    // Binary streams initialization (vertical falling 0's and 1's)
    function initBinaryStreams() {
      binaryStreams.current = [];
      for (let i = 0; i < config.streamCount; i++) {
        const characters = [];
        const length = Math.floor(Math.random() * 15) + 8;
        
        for (let j = 0; j < length; j++) {
          characters.push({
            char: Math.random() > 0.5 ? '0' : '1',
            y: Math.random() * canvas.height,
            opacity: Math.random() * 0.8 + 0.2,
            size: Math.floor(Math.random() * 4) + 8 // Different sizes for binary digits
          });
        }
        
        binaryStreams.current.push({
          x: Math.random() * canvas.width,
          characters,
          speed: Math.random() * 2 + 1 // Different speeds for streams
        });
      }
    }
    
    // Scan lines initialization
    function initScanLines() {
      scanLines.current = [];
      // Create 2-3 scan lines
      for (let i = 0; i < 3; i++) {
        scanLines.current.push({
          position: Math.random() * canvas.width,
          direction: i % 2 === 0 ? 'vertical' : 'horizontal',
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          width: Math.random() * 2 + 1
        });
      }
    }
    
    // Data boxes initialization
    function initDataBoxes() {
      dataBoxes.current = [];
      // Create 4-6 data boxes at various sizes
      for (let i = 0; i < 5; i++) {
        const values = [];
        for (let j = 0; j < 4; j++) {
          values.push(generateRandomDataValue());
        }
        
        dataBoxes.current.push({
          x: Math.random() * (canvas.width - 150),
          y: Math.random() * (canvas.height - 100),
          width: Math.random() * 120 + 80,
          height: Math.random() * 80 + 60,
          opacity: Math.random() * 0.4 + 0.2,
          values,
          active: Math.random() > 0.7
        });
      }
    }
    
    function generateRandomDataValue(): string {
      const types = [
        () => Math.floor(Math.random() * 999).toString().padStart(3, '0'),
        () => (Math.random() * 100).toFixed(2) + '%',
        () => 'x' + Math.floor(Math.random() * 16777215).toString(16),
        () => Math.random() > 0.5 ? 'TRUE' : 'FALSE',
        () => {
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          return chars.charAt(Math.floor(Math.random() * chars.length)) + 
                 Math.floor(Math.random() * 99);
        }
      ];
      
      const selectedType = types[Math.floor(Math.random() * types.length)];
      return selectedType();
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background color overlay
      ctx.fillStyle = config.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      drawGrid(ctx);
      
      // Draw binary streams
      drawBinaryStreams(ctx);
      
      // Draw connections between nodes
      drawConnections(ctx);
      
      // Draw data nodes
      drawNodes(ctx);
      
      // Draw data boxes
      drawDataBoxes(ctx);
      
      // Draw scan lines
      drawScanLines(ctx);
      
      // Update elements
      updateElements();
      
      animationFrameId.current = requestAnimationFrame(animate);
    }
    
    function drawGrid(ctx: CanvasRenderingContext2D) {
      gridLines.current.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.opacity;
        ctx.lineWidth = 1;
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
    }
    
    function drawBinaryStreams(ctx: CanvasRenderingContext2D) {
      binaryStreams.current.forEach(stream => {
        stream.characters.forEach(charData => {
          ctx.font = `${charData.size}px monospace`;
          ctx.fillStyle = config.binaryColor;
          ctx.globalAlpha = charData.opacity;
          ctx.fillText(charData.char, stream.x, charData.y);
          ctx.globalAlpha = 1;
        });
      });
    }
    
    function drawConnections(ctx: CanvasRenderingContext2D) {
      ctx.lineWidth = 1;
      dataNodes.current.forEach((node, i) => {
        node.connections.forEach(targetIdx => {
          const target = dataNodes.current[targetIdx];
          const distance = Math.hypot(target.x - node.x, target.y - node.y);
          
          // Only draw connections within a certain distance
          if (distance < canvas.width / 2) {
            const opacity = 0.5 - (distance / (canvas.width / 2)) * 0.3;
            
            ctx.beginPath();
            ctx.strokeStyle = node.highlight || target.highlight ? config.accentColor : config.primaryColor;
            ctx.globalAlpha = opacity;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            
            // Add animated data transfer effect
            const now = Date.now() / 1000;
            const speed = 2;
            const offset = (now * speed) % 1;
            
            // Draw dashed line for data transfer effect
            ctx.setLineDash([2, 2]);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Draw small data packets along the line
            const packetCount = Math.floor(distance / 40) + 1;
            for (let p = 0; p < packetCount; p++) {
              const t = (p / packetCount + offset) % 1;
              const x = node.x + (target.x - node.x) * t;
              const y = node.y + (target.y - node.y) * t;
              
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = node.highlight || target.highlight ? config.accentColor : config.primaryColor;
              ctx.fill();
            }
            
            ctx.globalAlpha = 1;
          }
        });
      });
    }
    
    function drawNodes(ctx: CanvasRenderingContext2D) {
      dataNodes.current.forEach(node => {
        // Draw main node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = node.highlight ? config.accentColor : config.primaryColor;
        ctx.globalAlpha = node.opacity;
        ctx.fill();
        
        // Draw outer glow
        if (node.highlight) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size / 2 + 5, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = node.opacity * 0.5;
          ctx.filter = 'blur(8px)';
          ctx.fill();
          ctx.filter = 'none';
        }
        
        // Draw UI elements if this is a UI node
        if (node.ui) {
          // Draw rectangular frame around the node
          ctx.beginPath();
          ctx.rect(node.x - node.size / 1.5, node.y - node.size / 1.5, node.size * 1.3, node.size * 1.3);
          ctx.strokeStyle = config.uiBoxBorderColor;
          ctx.globalAlpha = node.opacity + 0.2;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Add corner markers
          const cornerSize = 5;
          const corners = [
            { x: node.x - node.size / 1.5, y: node.y - node.size / 1.5 },
            { x: node.x + node.size / 1.5 * 1.3, y: node.y - node.size / 1.5 },
            { x: node.x - node.size / 1.5, y: node.y + node.size / 1.5 * 1.3 },
            { x: node.x + node.size / 1.5 * 1.3, y: node.y + node.size / 1.5 * 1.3 }
          ];
          
          corners.forEach(corner => {
            ctx.beginPath();
            ctx.arc(corner.x, corner.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = config.uiBoxBorderColor;
            ctx.fill();
          });
          
          // Add random data values
          ctx.font = '8px monospace';
          ctx.fillStyle = config.uiBoxBorderColor;
          ctx.fillText(generateRandomDataValue(), node.x - node.size / 2, node.y + node.size + 10);
        }
        
        ctx.globalAlpha = 1;
      });
    }
    
    function drawDataBoxes(ctx: CanvasRenderingContext2D) {
      dataBoxes.current.forEach(box => {
        // Draw box background
        ctx.fillStyle = config.uiBoxColor;
        ctx.globalAlpha = box.opacity;
        ctx.fillRect(box.x, box.y, box.width, box.height);
        
        // Draw box border
        ctx.strokeStyle = config.uiBoxBorderColor;
        ctx.globalAlpha = box.active ? box.opacity + 0.3 : box.opacity;
        ctx.lineWidth = box.active ? 2 : 1;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
        
        // Draw corner brackets
        const cornerSize = box.width / 10;
        
        // Top-left corner
        ctx.beginPath();
        ctx.moveTo(box.x, box.y + cornerSize);
        ctx.lineTo(box.x, box.y);
        ctx.lineTo(box.x + cornerSize, box.y);
        ctx.stroke();
        
        // Top-right corner
        ctx.beginPath();
        ctx.moveTo(box.x + box.width - cornerSize, box.y);
        ctx.lineTo(box.x + box.width, box.y);
        ctx.lineTo(box.x + box.width, box.y + cornerSize);
        ctx.stroke();
        
        // Bottom-left corner
        ctx.beginPath();
        ctx.moveTo(box.x, box.y + box.height - cornerSize);
        ctx.lineTo(box.x, box.y + box.height);
        ctx.lineTo(box.x + cornerSize, box.y + box.height);
        ctx.stroke();
        
        // Bottom-right corner
        ctx.beginPath();
        ctx.moveTo(box.x + box.width - cornerSize, box.y + box.height);
        ctx.lineTo(box.x + box.width, box.y + box.height);
        ctx.lineTo(box.x + box.width, box.y + box.height - cornerSize);
        ctx.stroke();
        
        // Draw data values inside box
        ctx.font = '10px monospace';
        ctx.fillStyle = config.uiBoxBorderColor;
        ctx.globalAlpha = box.opacity + 0.3;
        
        for (let i = 0; i < box.values.length; i++) {
          ctx.fillText(box.values[i], box.x + 10, box.y + 20 + i * 16);
        }
        
        // Draw title bar
        ctx.fillStyle = config.uiBoxBorderColor;
        ctx.globalAlpha = box.opacity * 0.7;
        ctx.fillRect(box.x, box.y, box.width, 3);
        
        ctx.globalAlpha = 1;
      });
    }
    
    function drawScanLines(ctx: CanvasRenderingContext2D) {
      scanLines.current.forEach(line => {
        ctx.beginPath();
        ctx.globalAlpha = line.opacity;
        ctx.lineWidth = line.width;
        ctx.strokeStyle = config.scanColor;
        
        if (line.direction === 'horizontal') {
          ctx.moveTo(0, line.position);
          ctx.lineTo(canvas.width, line.position);
        } else {
          ctx.moveTo(line.position, 0);
          ctx.lineTo(line.position, canvas.height);
        }
        
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
    }
    
    function updateElements() {
      // Update binary streams - make them flow downward
      binaryStreams.current.forEach(stream => {
        stream.characters.forEach(charData => {
          charData.y += stream.speed;
          
          // Reset position when it goes off-screen
          if (charData.y > canvas.height) {
            charData.y = -20;
            charData.opacity = Math.random() * 0.8 + 0.2;
          }
        });
      });
      
      // Update scan lines
      scanLines.current.forEach(line => {
        if (line.direction === 'horizontal') {
          line.position += line.speed;
          if (line.position > canvas.height) {
            line.position = 0;
          }
        } else {
          line.position += line.speed;
          if (line.position > canvas.width) {
            line.position = 0;
          }
        }
      });
      
      // Update data nodes - subtle movement
      dataNodes.current.forEach(node => {
        // Move nodes slightly based on a sine wave
        const time = Date.now() / 2000;
        const moveX = Math.sin(time + node.x * 0.01) * 0.5;
        const moveY = Math.cos(time + node.y * 0.01) * 0.5;
        
        node.x += moveX;
        node.y += moveY;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) {
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }
        
        // Interaction with mouse
        const mouseDistance = Math.hypot(mousePosition.current.x - node.x, mousePosition.current.y - node.y);
        const interactionRadius = 150;
        
        if (mouseDistance < interactionRadius) {
          // Highlight on mouse hover
          node.highlight = true;
          
          // Gently move away from mouse
          const angle = Math.atan2(node.y - mousePosition.current.y, node.x - mousePosition.current.x);
          const force = (1 - mouseDistance / interactionRadius) * 2;
          node.x += Math.cos(angle) * force;
          node.y += Math.sin(angle) * force;
        } else if (node.highlight && Math.random() > 0.95) {
          // Randomly turn off highlights
          node.highlight = false;
        }
      });
      
      // Update data boxes
      dataBoxes.current.forEach(box => {
        // Randomly update some values
        if (Math.random() > 0.99) {
          const valueToUpdate = Math.floor(Math.random() * box.values.length);
          box.values[valueToUpdate] = generateRandomDataValue();
        }
        
        // Interaction with mouse
        const inBox = mousePosition.current.x > box.x && 
                      mousePosition.current.x < box.x + box.width &&
                      mousePosition.current.y > box.y && 
                      mousePosition.current.y < box.y + box.height;
                      
        if (inBox) {
          box.active = true;
        } else if (box.active && Math.random() > 0.995) {
          box.active = false;
        }
      });
    }
    
    animate();
    
    // Clean up
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 w-full h-full" 
      aria-hidden="true"
    />
  );
};

export default TechBackground;
