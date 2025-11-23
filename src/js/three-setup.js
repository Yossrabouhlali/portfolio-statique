// Three.js Scene - Cube modulaire + satellites (embedded systems theme)
// Initializes when page loads
function initThreeScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfaf9f7);
    const canvas = document.createElement('canvas');
    const container = document.getElementById('canvas-container');
    if (!container) return; // Safety check
    
    container.appendChild(canvas);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 3;
    
    // Create a group to hold the entire system
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);
    
    // Main cube (core system)
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff9fb8 });
    const mainCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    systemGroup.add(mainCube);
    
    // Satellite cubes (modules orbiting)
    const satellites = [];
    const positions = [[1.5, 0, 0], [-1.5, 0, 0], [0, 1.5, 0], [0, -1.5, 0], [0, 0, 1.5], [0, 0, -1.5]];
    positions.forEach(pos => {
        const satGeom = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const satMat = new THREE.MeshPhongMaterial({ color: 0xffc0d9 });
        const sat = new THREE.Mesh(satGeom, satMat);
        sat.position.set(...pos);
        systemGroup.add(sat);
        satellites.push({ 
            mesh: sat, 
            originalPos: { x: pos[0], y: pos[1], z: pos[2] },
            angle: Math.random() * Math.PI * 2,
            radius: Math.sqrt(pos[0]**2 + pos[1]**2 + pos[2]**2),
            axis: pos[0] !== 0 ? 'x' : (pos[1] !== 0 ? 'y' : 'z')
        });
    });
    
    // Lighting
    const light = new THREE.PointLight(0xffffff, 1.2, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffc0d9, 0.5);
    scene.add(ambientLight);
    
    // Mouse tracking variables
    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;
    let isMouseOver = false;
    let isDragging = false;
    let previousMouseX = 0, previousMouseY = 0;
    let rotationVelocityX = 0, rotationVelocityY = 0;
    
    // Mouse down handler - start dragging
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
        container.style.cursor = 'grabbing';
    });
    
    // Mouse up handler - stop dragging
    window.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });
    
    // Mouse move handler
    container.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        isMouseOver = true;
        
        // If dragging, calculate rotation based on mouse movement
        if (isDragging) {
            const deltaX = e.clientX - previousMouseX;
            const deltaY = e.clientY - previousMouseY;
            
            rotationVelocityY = deltaX * 0.01;
            rotationVelocityX = deltaY * 0.01;
            
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
        }
    });
    
    // Mouse leave handler
    container.addEventListener('mouseleave', () => {
        isMouseOver = false;
        isDragging = false;
        container.style.cursor = 'default';
    });
    
    // Mouse enter handler
    container.addEventListener('mouseenter', () => {
        container.style.cursor = 'grab';
    });
    
    // Touch support for mobile
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        previousMouseX = touch.clientX;
        previousMouseY = touch.clientY;
    });
    
    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        isMouseOver = true;
        
        if (isDragging) {
            const deltaX = touch.clientX - previousMouseX;
            const deltaY = touch.clientY - previousMouseY;
            
            rotationVelocityY = deltaX * 0.01;
            rotationVelocityX = deltaY * 0.01;
            
            previousMouseX = touch.clientX;
            previousMouseY = touch.clientY;
        }
    }, { passive: false });
    
    container.addEventListener('touchend', () => {
        isMouseOver = false;
        isDragging = false;
    });
    
    // Animation loop
    function animate() {
        // Apply rotation to the entire system group
        if (isDragging) {
            systemGroup.rotation.y += rotationVelocityY;
            systemGroup.rotation.x += rotationVelocityX;
        } else {
            // Auto-rotate when not dragging
            systemGroup.rotation.x += 0.005;
            systemGroup.rotation.y += 0.008;
            
            // Apply damping to rotation velocity
            rotationVelocityX *= 0.95;
            rotationVelocityY *= 0.95;
        }
        
        // Individual rotation for main cube
        mainCube.rotation.x += 0.01;
        mainCube.rotation.y += 0.01;
        
        // Animate satellites in orbit
        satellites.forEach((sat) => {
            sat.angle += 0.01;
            
            // Calculate orbit based on axis
            if (sat.axis === 'x') {
                sat.mesh.position.x = sat.originalPos.x;
                sat.mesh.position.y = Math.cos(sat.angle) * sat.radius;
                sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
            } else if (sat.axis === 'y') {
                sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
                sat.mesh.position.y = sat.originalPos.y;
                sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
            } else { // z axis
                sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
                sat.mesh.position.y = Math.sin(sat.angle) * sat.radius;
                sat.mesh.position.z = sat.originalPos.z;
            }
            
            // Individual satellite rotation
            sat.mesh.rotation.x += 0.01;
            sat.mesh.rotation.y += 0.01;
        });
        
        // Smooth camera parallax on mouse movement (only when not dragging)
        if (!isDragging) {
            const targetCameraX = mouseX * 0.5;
            const targetCameraY = mouseY * 0.5;
            camera.position.x += (targetCameraX - camera.position.x) * 0.05;
            camera.position.y += (targetCameraY - camera.position.y) * 0.05;
        }
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
    
    // Responsive resize handler
    window.addEventListener('resize', () => {
        const nw = container.clientWidth;
        const nh = container.clientHeight;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initThreeScene);
