/**
 * ARCHITECTURAL 3D REAL-TIME WEBGL ENGINE (THREE.JS PBR)
 * COLOR SPECIFIER PRO - ZERO EMOJI COMPLIANCE
 * Formulasi 60-30-10 Arsitektural, PBR Shaders, Dynamic Shadow Casting & Kelvin Lighting
 */

const Arch3DEngine = (() => {
  let container, canvas;
  let scene, camera, renderer, controls;
  let currentSceneId = "bedroom";
  let activePalette = {
    accent: "#CE3B27",
    main: "#4A5D33",
    ceiling: "#F4EFE6",
    frame: "#1C2414",
    detail: "#D87D4A",
    name: "Tuscan Olive & Heirloom Tomato"
  };

  let currentFinish = "matte";
  let currentKelvin = "daylight";
  let isSunActive = true;
  let isLightsActive = true;
  let isAutoRotate = false;

  // Scene Root Groups
  let bedroomGroup, facadeGroup, livingGroup;

  // Light References
  let dirSunLight, ambientLight;
  let spotLights = [];
  let pointLights = [];

  // Raycasting
  let raycaster = null;
  let mouse = null;
  let hoveredMesh = null;
  let originalEmissive = null;
  let onHoverCallback = null;
  let onClickCallback = null;

  // Camera Presets
  const cameraPresets = {
    bedroom: {
      default: { pos: [0.6, -0.5, 4.6], target: [-0.6, -1.4, -2.0] },
      front: { pos: [-0.8, -0.6, 4.4], target: [-0.8, -1.4, -3.2] },
      angle: { pos: [3.6, -0.3, 3.4], target: [-0.9, -1.3, -2.0] },
      top: { pos: [1.8, 3.8, 4.2], target: [-0.6, -1.4, -1.6] }
    },
    facade: {
      default: { pos: [3.8, 1.4, 13.0], target: [0.2, 1.2, 0] },
      front: { pos: [0, 1.4, 13.5], target: [0, 1.4, 0] },
      angle: { pos: [9.5, 2.4, 10.5], target: [-0.5, 1.2, 0] },
      top: { pos: [2.0, 13.0, 14.0], target: [0, 1.0, 0] }
    },
    living: {
      default: { pos: [1.2, -0.4, 4.8], target: [-0.5, -1.2, -1.8] },
      front: { pos: [-0.5, -0.5, 5.0], target: [-0.5, -1.2, -3.2] },
      angle: { pos: [3.8, -0.2, 3.4], target: [-0.8, -1.2, -1.8] },
      top: { pos: [1.6, 4.0, 4.2], target: [-0.5, -1.2, -1.5] }
    }
  };

  // ========================================================================
  // PROCEDURAL TEXTURE GENERATORS (PHOTOREALISTIC MAPS)
  // ========================================================================
  function createParquetTexture() {
    const c = document.createElement("canvas");
    c.width = 1024;
    c.height = 1024;
    const ctx = c.getContext("2d");

    ctx.fillStyle = "#8a5832";
    ctx.fillRect(0, 0, 1024, 1024);

    const plankWidth = 128;
    const plankHeight = 32;
    const rows = 1024 / plankHeight;
    const cols = 1024 / plankWidth;

    for (let r = 0; r < rows; r++) {
      const offset = (r % 2) * (plankWidth / 2);
      for (let col = -1; col < cols + 1; col++) {
        const x = col * plankWidth + offset;
        const y = r * plankHeight;
        const toneVar = Math.sin(r * 3.7 + col * 5.2) * 18;
        const red = Math.floor(145 + toneVar);
        const green = Math.floor(95 + toneVar * 0.7);
        const blue = Math.floor(55 + toneVar * 0.5);

        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.fillRect(x + 1, y + 1, plankWidth - 2, plankHeight - 2);

        // Wood grain streaks
        ctx.fillStyle = "rgba(0,0,0,0.06)";
        for (let g = 0; g < 4; g++) {
          const gy = y + 4 + g * 7;
          ctx.fillRect(x + 2, gy, plankWidth - 4, 1.5);
        }

        // Plank joint bevel shadow
        ctx.fillStyle = "rgba(0,0,0,0.22)";
        ctx.fillRect(x, y + plankHeight - 1, plankWidth, 1);
        ctx.fillRect(x + plankWidth - 1, y, 1, plankHeight);
      }
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }

  function createMarbleTexture() {
    const c = document.createElement("canvas");
    c.width = 1024;
    c.height = 1024;
    const ctx = c.getContext("2d");

    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, 1024, 1024);

    // Marble tile joints
    ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, 512, 512);
    ctx.strokeRect(512, 0, 512, 512);
    ctx.strokeRect(0, 512, 512, 512);
    ctx.strokeRect(512, 512, 512, 512);

    // Marble veins
    ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(80, 0);
    ctx.bezierCurveTo(240, 180, 190, 360, 480, 512);
    ctx.bezierCurveTo(620, 640, 780, 720, 920, 1024);
    ctx.stroke();

    ctx.strokeStyle = "rgba(100, 116, 139, 0.15)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(512, 80);
    ctx.bezierCurveTo(680, 220, 420, 380, 750, 512);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }

  function createPaverTexture() {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext("2d");

    ctx.fillStyle = "#334155";
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = "rgba(15, 23, 42, 0.6)";
    ctx.lineWidth = 4;
    for (let x = 0; x <= 512; x += 128) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    for (let y = 0; y <= 512; y += 128) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }

  function createPlasterBumpMap() {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 256, 256);

    const imgData = ctx.getImageData(0, 0, 256, 256);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 22;
      const v = 128 + noise;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
    }
    ctx.putImageData(imgData, 0, 0);

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 8);
    return tex;
  }

  function createOutdoorSkyTexture() {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext("2d");

    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, "#0284c7");
    grad.addColorStop(0.5, "#7dd3fc");
    grad.addColorStop(0.75, "#bae6fd");
    grad.addColorStop(1, "#f0fdf4");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Siluet dedaunan pohon luar
    ctx.fillStyle = "#047857";
    ctx.beginPath();
    ctx.arc(360, 440, 160, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(180, 480, 130, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(c);
  }

  // Cached Textures
  let parquetTexture, marbleTexture, paverTexture, plasterBump, skyTexture;

  // Material Registry for Dynamic Surface Recoloring
  const surfaceMaterials = {
    accent: [],
    main: [],
    ceiling: [],
    frame: [],
    detail: []
  };

  function registerSurface(mesh, type, name) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = {
      isArchSurface: true,
      surfaceType: type,
      surfaceName: name
    };
    if (surfaceMaterials[type]) {
      surfaceMaterials[type].push(mesh.material);
    }
  }

  // ========================================================================
  // SCENE BUILDER 1: KAMAR TIDUR UTAMA (MASTER BEDROOM 3D)
  // ========================================================================
  function buildBedroomScene() {
    const group = new THREE.Group();
    group.name = "bedroom";

    // 1. Dinding Utama Belakang (60%)
    const mainWallMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.main),
      roughness: 0.88,
      metalness: 0.02,
      bumpMap: plasterBump,
      bumpScale: 0.015
    });
    const mainWall = new THREE.Mesh(new THREE.BoxGeometry(10, 5.2, 0.2), mainWallMat);
    mainWall.position.set(0, 0, -4.5);
    registerSurface(mainWall, "main", "Dinding Utama Perimeter (60%)");
    group.add(mainWall);

    // 2. Lukisan Kanvas pada Dinding Belakang
    const artFrameMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.frame), roughness: 0.3 });
    const artFrame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 0.08), artFrameMat);
    artFrame.position.set(-0.8, 0.8, -4.38);
    registerSurface(artFrame, "frame", "Bingkai Kanvas Seni");
    group.add(artFrame);

    const artCanvasMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 });
    const artCanvas = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.4, 0.02), artCanvasMat);
    artCanvas.position.set(-0.8, 0.8, -4.33);
    group.add(artCanvas);

    // 3. Dinding Aksen Kiri dengan Slat Kayu Akustik 3D (30%)
    const accentWallMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent),
      roughness: 0.8,
      metalness: 0.05
    });
    const accentWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 5.2, 9), accentWallMat);
    accentWall.position.set(-5, 0, 0);
    registerSurface(accentWall, "accent", "Dinding Aksen Kepala Ranjang (30%)");
    group.add(accentWall);

    // Protruding 3D Acoustic Slats
    const slatMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent).multiplyScalar(0.85),
      roughness: 0.65,
      metalness: 0.05
    });
    for (let i = 0; i < 22; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.06, 5.2, 0.08), slatMat);
      slat.position.set(-4.88, 0, -4.2 + i * 0.38);
      slat.castShadow = true;
      slat.receiveShadow = true;
      group.add(slat);
    }

    // 4. Plafon dengan Drop Tray Recess & Cove Light (10%)
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.ceiling),
      roughness: 0.95,
      metalness: 0.0
    });
    const ceiling = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 9), ceilingMat);
    ceiling.position.set(0, 2.6, 0);
    registerSurface(ceiling, "ceiling", "Plafon & Lis Emulsi (10%)");
    group.add(ceiling);

    // Drop Tray Recess
    const trayMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const tray = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.08, 6.0), trayMat);
    tray.position.set(-0.5, 2.52, 0);
    group.add(tray);

    // Cove Light Glow Bar
    const coveLightMat = new THREE.MeshBasicMaterial({ color: 0xfffae0 });
    const coveMesh = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.03, 6.1), coveLightMat);
    coveMesh.position.set(-0.5, 2.49, 0);
    group.add(coveMesh);

    // 5. Dinding Kanan dengan Jendela Kaca Panorama
    const rightWallTop = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 9), mainWallMat);
    rightWallTop.position.set(5, 2.2, 0);
    registerSurface(rightWallTop, "main", "Dinding Kanan Atas");
    group.add(rightWallTop);

    const rightWallBottom = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.6, 9), mainWallMat);
    rightWallBottom.position.set(5, -2.3, 0);
    registerSurface(rightWallBottom, "main", "Dinding Kanan Bawah");
    group.add(rightWallBottom);

    // Kusen Jendela Eksterior Aluminium Hitam
    const windowFrameMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.frame),
      roughness: 0.25,
      metalness: 0.75
    });
    const winFrameOuter = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3.8, 7.6), windowFrameMat);
    winFrameOuter.position.set(4.98, 0, 0);
    registerSurface(winFrameOuter, "frame", "Kusen Jendela Aluminium");
    group.add(winFrameOuter);

    // Kaca Jendela Transparan
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transmission: 0.88,
      opacity: 0.35,
      transparent: true,
      roughness: 0.05,
      metalness: 0.1
    });
    const glassMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 3.6, 7.4), glassMat);
    glassMesh.position.set(4.98, 0, 0);
    group.add(glassMesh);

    // Pemandangan Luar Jendela
    const skyBackdropMat = new THREE.MeshBasicMaterial({ map: skyTexture });
    const skyBackdrop = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), skyBackdropMat);
    skyBackdrop.position.set(7.5, 0.5, 0);
    skyBackdrop.rotation.y = -Math.PI / 2;
    group.add(skyBackdrop);

    // Tirai Linen Putih di Sudut Jendela
    const curtainMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, opacity: 0.9, transparent: true });
    const curtain1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 3.8, 16), curtainMat);
    curtain1.position.set(4.75, 0, -3.4);
    group.add(curtain1);

    // 6. Lantai Parket Kayu Oak Realistis
    const floorMat = new THREE.MeshStandardMaterial({
      map: parquetTexture,
      roughness: 0.38,
      metalness: 0.05
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 9), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -2.6, 0);
    floor.receiveShadow = true;
    group.add(floor);

    // Karpet Area Lembut di Bawah Ranjang
    const rugMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.95 });
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 5.8), rugMat);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(-0.8, -2.59, 0.4);
    rug.receiveShadow = true;
    group.add(rug);

    // 7. Ranjang Utama Desainer (Master Bed 3D Assembly)
    // Headboard Tufted (Warna Aksen 30%)
    const headboardMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent),
      roughness: 0.72,
      metalness: 0.04
    });
    const headboard = new THREE.Mesh(new THREE.BoxGeometry(4.0, 2.1, 0.25), headboardMat);
    headboard.position.set(-0.8, -0.6, -4.25);
    registerSurface(headboard, "accent", "Headboard Ranjang (30%)");
    group.add(headboard);

    // Rangka Ranjang
    const bedFrameMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.frame), roughness: 0.4 });
    const bedBase = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.55, 4.4), bedFrameMat);
    bedBase.position.set(-0.8, -2.3, -1.9);
    registerSurface(bedBase, "frame", "Rangka Ranjang");
    group.add(bedBase);

    // Kasur & Sprei Putih
    const mattressMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.85 });
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.48, 4.2), mattressMat);
    mattress.position.set(-0.8, -1.8, -1.9);
    mattress.castShadow = true;
    mattress.receiveShadow = true;
    group.add(mattress);

    // Selimut Bedding Throw Runner (Warna Detail / 5)
    const duvetMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.detail),
      roughness: 0.78,
      metalness: 0.03
    });
    const duvet = new THREE.Mesh(new THREE.BoxGeometry(3.44, 0.18, 2.4), duvetMat);
    duvet.position.set(-0.8, -1.52, -0.9);
    registerSurface(duvet, "detail", "Tekstil Duvet & Bedding (Detail)");
    group.add(duvet);

    // 4 Bantal Tidur Empuk
    const pillowMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 });
    const pillowAccentMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.accent), roughness: 0.8 });
    registerSurface({ material: pillowAccentMat }, "accent", "Bantal Aksen Ranjang");

    for (let p = 0; p < 2; p++) {
      const px = -2.0 + p * 2.4;
      const pilBack = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.22, 0.6), pillowMat);
      pilBack.position.set(px, -1.45, -3.6);
      pilBack.rotation.x = 0.3;
      pilBack.castShadow = true;
      group.add(pilBack);

      const pilFront = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.2, 0.5), pillowAccentMat);
      pilFront.position.set(px, -1.42, -3.2);
      pilFront.rotation.x = 0.4;
      pilFront.castShadow = true;
      group.add(pilFront);
    }

    // Meja Nakas Melayang (Kiri & Kanan)
    const nightstandMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.detail), roughness: 0.5 });
    for (let n = 0; n < 2; n++) {
      const nx = n === 0 ? -3.4 : 1.8;
      const ns = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.42, 0.8), nightstandMat);
      ns.position.set(nx, -1.8, -3.8);
      registerSurface(ns, "detail", `Meja Nakas ${n === 0 ? 'Kiri' : 'Kanan'}`);
      group.add(ns);

      // Lampu Meja Arsitektural
      const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.4, 16), artFrameMat);
      lampBase.position.set(nx, -1.4, -3.8);
      group.add(lampBase);

      const lampShadeMat = new THREE.MeshBasicMaterial({ color: 0xfff3d4 });
      const lampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 0.35, 16), lampShadeMat);
      lampShade.position.set(nx, -1.05, -3.8);
      group.add(lampShade);

      // Lamp Point Light
      const pLight = new THREE.PointLight(0xffecd2, 0.5, 4.0, 1.8);
      pLight.position.set(nx, -1.0, -3.8);
      pointLights.push(pLight);
      group.add(pLight);
    }

    // Spot Downlights Cones dari Plafon
    const spot1 = new THREE.SpotLight(0xfff5e6, 0.9, 8.0, Math.PI / 6, 0.45, 1.5);
    spot1.position.set(-0.8, 2.5, -1.5);
    spot1.target.position.set(-0.8, -2.6, -1.5);
    spot1.castShadow = true;
    spotLights.push(spot1);
    group.add(spot1);
    group.add(spot1.target);

    return group;
  }

  // ========================================================================
  // SCENE BUILDER 2: FASAD VILLA MODERN (3D EXTERIOR VILLA)
  // ========================================================================
  function buildFacadeScene() {
    const group = new THREE.Group();
    group.name = "facade";

    // 1. Pelataran Paving Eksterior
    const groundMat = new THREE.MeshStandardMaterial({
      map: paverTexture,
      roughness: 0.82,
      metalness: 0.05
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, 0, 0);
    ground.receiveShadow = true;
    group.add(ground);

    // 2. Dinding Utama Eksterior Lantai 1 (60%)
    const extMainMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.main),
      roughness: 0.85,
      metalness: 0.02,
      bumpMap: plasterBump,
      bumpScale: 0.015
    });
    const mainBody = new THREE.Mesh(new THREE.BoxGeometry(7.5, 3.6, 6.0), extMainMat);
    mainBody.position.set(1.5, 1.8, -1.0);
    registerSurface(mainBody, "main", "Dinding Utama Eksterior (60%)");
    group.add(mainBody);

    // 3. Focal Tower Aksen Fasad (30%)
    const extAccentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent),
      roughness: 0.75,
      metalness: 0.08
    });
    const tower = new THREE.Mesh(new THREE.BoxGeometry(2.4, 7.8, 3.2), extAccentMat);
    tower.position.set(-3.2, 3.9, 0.4);
    registerSurface(tower, "accent", "Focal Tower Aksen Fasad (30%)");
    group.add(tower);

    // Slat Kisi Tekstur pada Tower
    const towerSlatMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent).multiplyScalar(0.75),
      roughness: 0.6
    });
    for (let s = 0; s < 8; s++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.1, 7.6, 0.08), towerSlatMat);
      slat.position.set(-4.2 + s * 0.28, 3.9, 2.05);
      slat.castShadow = true;
      group.add(slat);
    }

    // 4. Kantilever Lantai 2 Menjorok Maju (Protruding Cube)
    const secondFloor = new THREE.Mesh(new THREE.BoxGeometry(7.8, 3.4, 6.8), extMainMat);
    secondFloor.position.set(1.7, 5.2, -0.4);
    registerSurface(secondFloor, "main", "Volume Kantilever Lantai 2");
    group.add(secondFloor);

    // Ribbon Window Lantai 2
    const frameMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.frame), roughness: 0.2, metalness: 0.8 });
    const winFrameL2 = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.6, 0.1), frameMat);
    winFrameL2.position.set(1.7, 5.4, 3.05);
    registerSurface(winFrameL2, "frame", "Kusen Ribbon Window Lantai 2");
    group.add(winFrameL2);

    const glassL2Mat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transmission: 0.75, roughness: 0.05, opacity: 0.5, transparent: true });
    const glassL2 = new THREE.Mesh(new THREE.BoxGeometry(6.2, 1.4, 0.05), glassL2Mat);
    glassL2.position.set(1.7, 5.4, 3.08);
    group.add(glassL2);

    // 5. Overhang Kanopi Atap & Lisplang Trim (10%)
    const fasciaMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.ceiling),
      roughness: 0.85,
      metalness: 0.0
    });
    const roofOverhang = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.4, 7.4), fasciaMat);
    roofOverhang.position.set(1.7, 7.0, -0.3);
    registerSurface(roofOverhang, "ceiling", "Lisplang & Overhang Kanopi (10%)");
    group.add(roofOverhang);

    // 6. Lantai 1: Curtain Wall Kaca & Pintu Pivot Utama
    const curtainWall = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.8, 0.1), frameMat);
    curtainWall.position.set(-0.2, 1.4, 2.05);
    registerSurface(curtainWall, "frame", "Curtain Wall Kaca");
    group.add(curtainWall);

    const curtainGlass = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.6, 0.04), glassL2Mat);
    curtainGlass.position.set(-0.2, 1.4, 2.08);
    group.add(curtainGlass);

    // Pintu Pivot Mewah (Warna Detail)
    const doorPivotMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.detail),
      roughness: 0.45,
      metalness: 0.08
    });
    const pivotDoor = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.8, 0.12), doorPivotMat);
    pivotDoor.position.set(3.2, 1.4, 2.05);
    registerSurface(pivotDoor, "detail", "Pintu Masuk Pivot (Detail)");
    group.add(pivotDoor);

    // Vertical Stainless Steel Long Handle
    const handleMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.95, roughness: 0.1 });
    const doorHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.4, 16), handleMat);
    doorHandle.position.set(3.8, 1.4, 2.16);
    group.add(doorHandle);

    // 7. Tangga Teras Melayang & LED Underglow
    const step1 = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 }));
    step1.position.set(3.0, 0.1, 2.8);
    step1.receiveShadow = true;
    group.add(step1);

    const stepLedMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const stepLed = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.03, 0.05), stepLedMat);
    stepLed.position.set(3.0, 0.02, 3.4);
    group.add(stepLed);

    // Pot Beton dengan Tanaman Snake Plant
    const planterMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const planter = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.8), planterMat);
    planter.position.set(-1.8, 0.4, 2.6);
    planter.castShadow = true;
    group.add(planter);

    const plantMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.8 });
    for (let p = 0; p < 5; p++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.12, 1.1 + p * 0.15, 8), plantMat);
      leaf.position.set(-2.2 + p * 0.2, 1.2, 2.6 + (p % 2) * 0.1);
      leaf.rotation.z = (p - 2) * 0.12;
      leaf.castShadow = true;
      group.add(leaf);
    }

    return group;
  }

  // ========================================================================
  // SCENE BUILDER 3: RUANG TAMU & TV SLAT (3D LIVING ROOM)
  // ========================================================================
  function buildLivingScene() {
    const group = new THREE.Group();
    group.name = "living";

    // 1. Plafon Tinggi dengan Rel Magnetic Track Light (10%)
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.ceiling),
      roughness: 0.92,
      metalness: 0.0
    });
    const ceiling = new THREE.Mesh(new THREE.BoxGeometry(11, 0.2, 9), ceilingMat);
    ceiling.position.set(0, 2.7, 0);
    registerSurface(ceiling, "ceiling", "Plafon Akustik Modern (10%)");
    group.add(ceiling);

    // Magnetic Track Light Rail
    const railMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 });
    const rail = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.06, 0.12), railMat);
    rail.position.set(0, 2.58, -0.5);
    group.add(rail);

    // Track Light Spot Heads
    for (let h = 0; h < 4; h++) {
      const spotHead = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.18, 16), railMat);
      spotHead.position.set(-2.4 + h * 1.6, 2.46, -0.5);
      group.add(spotHead);

      const spot = new THREE.SpotLight(0xfff3db, 0.8, 8.0, Math.PI / 7, 0.4, 1.4);
      spot.position.set(-2.4 + h * 1.6, 2.4, -0.5);
      spot.target.position.set(-2.4 + h * 1.6, -2.7, -1.0);
      spot.castShadow = true;
      spotLights.push(spot);
      group.add(spot);
      group.add(spot.target);
    }

    // 2. Dinding Utama Perimeter Belakang (60%)
    const mainMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.main),
      roughness: 0.86,
      metalness: 0.02,
      bumpMap: plasterBump,
      bumpScale: 0.015
    });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(11, 5.4, 0.2), mainMat);
    backWall.position.set(0, 0, -4.5);
    registerSurface(backWall, "main", "Dinding Utama Perimeter (60%)");
    group.add(backWall);

    // Pintu Geser Kaca Panorama di Dinding Belakang Kanan
    const glassFrameMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.frame), roughness: 0.2, metalness: 0.8 });
    const slideFrame = new THREE.Mesh(new THREE.BoxGeometry(4.2, 4.4, 0.15), glassFrameMat);
    slideFrame.position.set(2.8, -0.4, -4.38);
    registerSurface(slideFrame, "frame", "Kusen Pintu Geser Kaca");
    group.add(slideFrame);

    const slideGlass = new THREE.Mesh(new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      transmission: 0.9,
      roughness: 0.05,
      transparent: true,
      opacity: 0.35
    }), new THREE.BoxGeometry(4.0, 4.2, 0.04));
    slideGlass.position.set(2.8, -0.4, -4.35);
    group.add(slideGlass);

    // 3. Dinding Aksen Slat Kayu Akustik Kiri Penuh (30%)
    const slatWallMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent),
      roughness: 0.78,
      metalness: 0.05
    });
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 5.4, 9), slatWallMat);
    leftWall.position.set(-5.5, 0, 0);
    registerSurface(leftWall, "accent", "Backdrop Kisi Kayu Akustik (30%)");
    group.add(leftWall);

    // Protruding Slat Bars
    const slatBarMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accent).multiplyScalar(0.8),
      roughness: 0.65
    });
    for (let b = 0; b < 24; b++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.06, 5.4, 0.08), slatBarMat);
      slat.position.set(-5.38, 0, -4.2 + b * 0.36);
      slat.castShadow = true;
      group.add(slat);
    }

    // 4. Layar TV OLED 75 Inch dengan Bias Backlight Glow
    const tvFrame = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.8, 3.2), new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.2 }));
    tvFrame.position.set(-5.15, 0.4, -1.0);
    group.add(tvFrame);

    const tvScreen = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.74, 3.14), new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.1, metalness: 0.9 }));
    tvScreen.position.set(-5.11, 0.4, -1.0);
    group.add(tvScreen);

    // TV Bias Backlight Glow
    const tvGlowLight = new THREE.PointLight(0xffecd2, 0.9, 3.5, 1.8);
    tvGlowLight.position.set(-5.28, 0.4, -1.0);
    pointLights.push(tvGlowLight);
    group.add(tvGlowLight);

    // 5. Floating Media Credenza Console (Warna Detail)
    const credenzaMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.detail),
      roughness: 0.48,
      metalness: 0.08
    });
    const credenza = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 4.4), credenzaMat);
    credenza.position.set(-4.9, -1.2, -1.0);
    credenza.castShadow = true;
    registerSurface(credenza, "detail", "Floating Media Credenza");
    group.add(credenza);

    // 6. Lantai Marmer Putih Statuario Mewah
    const floorMat = new THREE.MeshStandardMaterial({
      map: marbleTexture,
      roughness: 0.22,
      metalness: 0.06
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(11, 9), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -2.7, 0);
    floor.receiveShadow = true;
    group.add(floor);

    // 7. Sofa Lounge Minimalis Kontemporer
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.88 });
    const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.45, 4.6), sofaMat);
    sofaBase.position.set(-1.0, -2.4, 1.2);
    sofaBase.castShadow = true;
    group.add(sofaBase);

    const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.8, 4.6), sofaMat);
    sofaBack.position.set(0.1, -1.8, 1.2);
    sofaBack.castShadow = true;
    group.add(sofaBack);

    // Bantal Sofa Aksen (30% Accent Color)
    const cushionMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(activePalette.accent), roughness: 0.78 });
    registerSurface({ material: cushionMat }, "accent", "Bantal Sofa Aksen");

    for (let c = 0; c < 3; c++) {
      const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.45, 0.6), cushionMat);
      cushion.position.set(-0.25, -1.75, -0.8 + c * 1.6);
      cushion.rotation.y = 0.15;
      cushion.castShadow = true;
      group.add(cushion);
    }

    // Meja Kopi Marmer Bulat
    const coffeeTableMat = new THREE.MeshStandardMaterial({ map: marbleTexture, roughness: 0.2, metalness: 0.1 });
    const coffeeTable = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.08, 32), coffeeTableMat);
    coffeeTable.position.set(-2.6, -2.3, 1.2);
    coffeeTable.castShadow = true;
    group.add(coffeeTable);

    // Brass rim
    const brassRim = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.22, 0.06, 32), new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.2 }));
    brassRim.position.set(-2.6, -2.3, 1.2);
    group.add(brassRim);

    return group;
  }

  // ========================================================================
  // SYSTEM SETUP & LIGHTING INITIALIZATION
  // ========================================================================
  function initLighting() {
    // Ambient Light
    ambientLight = new THREE.AmbientLight(0xffffff, 0.42);
    scene.add(ambientLight);

    // Directional Sunlight with Soft Raycasting Shadows
    dirSunLight = new THREE.DirectionalLight(0xfff8ed, 1.35);
    dirSunLight.position.set(9.0, 7.5, 4.5);
    dirSunLight.castShadow = true;
    dirSunLight.shadow.mapSize.width = 2048;
    dirSunLight.shadow.mapSize.height = 2048;
    dirSunLight.shadow.camera.near = 0.5;
    dirSunLight.shadow.camera.far = 30;
    dirSunLight.shadow.camera.left = -10;
    dirSunLight.shadow.camera.right = 10;
    dirSunLight.shadow.camera.top = 10;
    dirSunLight.shadow.camera.bottom = -10;
    dirSunLight.shadow.bias = -0.0001;
    scene.add(dirSunLight);
  }

  function setupInteraction() {
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("click", onPointerClick);
  }

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    const hit = intersects.find(i => i.object.userData && i.object.userData.isArchSurface);
    if (hit) {
      if (hoveredMesh !== hit.object) {
        if (hoveredMesh && hoveredMesh.material && hoveredMesh.material.emissive) {
          hoveredMesh.material.emissive.copy(originalEmissive);
        }
        hoveredMesh = hit.object;
        if (hoveredMesh.material && hoveredMesh.material.emissive) {
          originalEmissive = hoveredMesh.material.emissive.clone();
          hoveredMesh.material.emissive.setHex(0x1e3a8a);
        }
      }
      canvas.style.cursor = "pointer";
      if (onHoverCallback) {
        onHoverCallback(hit.object.userData, hit.point);
      }
    } else {
      if (hoveredMesh && hoveredMesh.material && hoveredMesh.material.emissive) {
        hoveredMesh.material.emissive.copy(originalEmissive);
      }
      hoveredMesh = null;
      canvas.style.cursor = "grab";
      if (onHoverCallback) {
        onHoverCallback(null);
      }
    }
  }

  function onPointerClick(e) {
    if (hoveredMesh && onClickCallback) {
      onClickCallback(hoveredMesh.userData);
    }
  }

  // ========================================================================
  // PUBLIC CONTROLLER INTERFACE
  // ========================================================================
  function init(containerEl) {
    if (typeof THREE === "undefined") {
      console.warn("THREE.js is not loaded.");
      return;
    }
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    container = containerEl;
    canvas = document.getElementById("arch-webgl-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "arch-webgl-canvas";
      container.appendChild(canvas);
    }

    const width = container.clientWidth || 980;
    const height = container.clientHeight || 560;

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Scene & Camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0f19);

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const initialPreset = cameraPresets.bedroom.default;
    camera.position.set(...initialPreset.pos);

    // Orbit Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.target.set(...initialPreset.target);
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.minDistance = 3.2;
    controls.maxDistance = 19.0;
    controls.update();

    // Procedural Texture Initialization
    parquetTexture = createParquetTexture();
    marbleTexture = createMarbleTexture();
    paverTexture = createPaverTexture();
    plasterBump = createPlasterBumpMap();
    skyTexture = createOutdoorSkyTexture();

    // Setup Lighting
    initLighting();

    // Build All 3 Architectural Scenes
    bedroomGroup = buildBedroomScene();
    facadeGroup = buildFacadeScene();
    livingGroup = buildLivingScene();

    scene.add(bedroomGroup);
    scene.add(facadeGroup);
    scene.add(livingGroup);

    // Default Visible Scene
    switchScene("bedroom");

    // Window Resize Observer
    window.addEventListener("resize", onWindowResize);
    setupInteraction();

    // Animation Loop
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    if (controls) {
      controls.autoRotate = isAutoRotate;
      controls.autoRotateSpeed = 1.35;
      controls.update();
    }
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  function onWindowResize() {
    if (!container || !renderer || !camera) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function switchScene(sceneId) {
    currentSceneId = sceneId;
    if (bedroomGroup) bedroomGroup.visible = (sceneId === "bedroom");
    if (facadeGroup) facadeGroup.visible = (sceneId === "facade");
    if (livingGroup) livingGroup.visible = (sceneId === "living");

    // Adjust Sun Angle per Scene
    if (dirSunLight) {
      if (sceneId === "facade") {
        dirSunLight.position.set(12.0, 14.0, 10.0);
        dirSunLight.intensity = isSunActive ? 1.6 : 0;
      } else {
        dirSunLight.position.set(8.5, 6.5, 4.0);
        dirSunLight.intensity = isSunActive ? 1.35 : 0;
      }
    }

    setCameraPreset("default");
  }

  function setCameraPreset(presetName) {
    if (!controls || !camera || !cameraPresets[currentSceneId]) return;
    const preset = cameraPresets[currentSceneId][presetName] || cameraPresets[currentSceneId].default;
    
    // Smooth transition
    const startPos = camera.position.clone();
    const targetPos = new THREE.Vector3(...preset.pos);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...preset.target);

    let progress = 0;
    const stepAnim = () => {
      progress += 0.06;
      camera.position.lerpVectors(startPos, targetPos, Math.min(progress, 1));
      controls.target.lerpVectors(startTarget, endTarget, Math.min(progress, 1));
      controls.update();
      if (progress < 1) requestAnimationFrame(stepAnim);
    };
    stepAnim();
  }

  function applyPalette(spec) {
    if (!spec || !spec.colors) return;
    activePalette = {
      accent: spec.colors[0],
      main: spec.colors[1] || spec.colors[0],
      ceiling: spec.colors[2] || "#FFFFFF",
      frame: spec.colors[3] || spec.colors[0],
      detail: spec.colors[4] || spec.colors[1] || spec.colors[0],
      name: spec.name
    };

    // Update Materials
    Object.keys(surfaceMaterials).forEach(type => {
      const hex = activePalette[type];
      if (hex) {
        const col = new THREE.Color(hex);
        surfaceMaterials[type].forEach(mat => {
          mat.color.copy(col);
          mat.needsUpdate = true;
        });
      }
    });
  }

  function setKelvin(mode) {
    currentKelvin = mode;
    const kelvinMap = {
      daylight: { sun: 0xffffff, amb: 0xffffff, spot: 0xfff5e6, exp: 1.1 },
      golden:   { sun: 0xf59e0b, amb: 0xfde68a, spot: 0xfbbf24, exp: 1.05 },
      warm:     { sun: 0xea580c, amb: 0xfed7aa, spot: 0xf97316, exp: 1.0 },
      cool:     { sun: 0x93c5fd, amb: 0xbfdbfe, spot: 0xdbeafe, exp: 1.15 },
      night:    { sun: 0x312e81, amb: 0x1e1b4b, spot: 0x4f46e5, exp: 0.85 }
    };

    const cfg = kelvinMap[mode] || kelvinMap.daylight;
    if (dirSunLight) dirSunLight.color.setHex(cfg.sun);
    if (ambientLight) ambientLight.color.setHex(cfg.amb);
    spotLights.forEach(s => s.color.setHex(cfg.spot));
    pointLights.forEach(p => p.color.setHex(cfg.spot));
    if (renderer) renderer.toneMappingExposure = cfg.exp;
  }

  function setFinish(shader) {
    currentFinish = shader;
    const finishSettings = {
      matte: { roughness: 0.92, metalness: 0.0 },
      satin: { roughness: 0.48, metalness: 0.05 },
      semigloss: { roughness: 0.18, metalness: 0.1 }
    };
    const s = finishSettings[shader] || finishSettings.matte;
    Object.keys(surfaceMaterials).forEach(type => {
      surfaceMaterials[type].forEach(mat => {
        mat.roughness = s.roughness;
        mat.metalness = s.metalness;
        mat.needsUpdate = true;
      });
    });
  }

  function toggleSun(active) {
    isSunActive = active;
    if (dirSunLight) {
      dirSunLight.intensity = active ? (currentSceneId === "facade" ? 1.6 : 1.35) : 0;
    }
  }

  function toggleLights(active) {
    isLightsActive = active;
    spotLights.forEach(s => s.intensity = active ? 0.85 : 0);
    pointLights.forEach(p => p.intensity = active ? 0.6 : 0);
  }

  function toggleAutoRotate() {
    isAutoRotate = !isAutoRotate;
    return isAutoRotate;
  }

  function onSurfaceHover(cb) {
    onHoverCallback = cb;
  }

  function onSurfaceClick(cb) {
    onClickCallback = cb;
  }

  return {
    init,
    switchScene,
    setCameraPreset,
    applyPalette,
    setKelvin,
    setFinish,
    toggleSun,
    toggleLights,
    toggleAutoRotate,
    onSurfaceHover,
    onSurfaceClick,
    getActivePalette: () => activePalette,
    resize: onWindowResize
  };
})();
