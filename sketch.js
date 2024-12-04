// variable to hold a reference to our A-Frame world
let world;

function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    world = new World('VRScene');

    // set a background color for the world using RGB values
    world.setBackground(135, 206, 235); // Sky blue

    // DRAGON BODY
    // Segmented body using spheres and cylinders for a curving appearance
    for (let i = 0; i < 6; i++) {
        let bodySegment = new Sphere({
            x: i * 0.8 - 2.5, y: 2 + Math.sin(i * 0.5), z: -5,
            radius: i === 0 ? 1.2 : 1 - i * 0.1, // Tapers as it goes
            red: 30, green: 120, blue: 30
        });
        world.add(bodySegment);
    }

    // DRAGON TAIL
    for (let i = 0; i < 4; i++) {
        let tailSegment = new Cone({
            x: 2 + i * 0.6, y: 2.5 - i * 0.1, z: -5,
            height: 0.6,
            radiusBottom: 0.4 - i * 0.1,
            radiusTop: 0,
            red: 30, green: 100, blue: 30,
          rotationX: 90,
          rotationY: 100
        });
        world.add(tailSegment);
    }

    // DRAGON HEAD
    var head = new Sphere({
        x: -4, y: 2.7, z: -5,
        radius: 1,
        red: 40, green: 140, blue: 40
    });
    world.add(head);

    // Dragon Snout
    var snout = new Cone({
        x: -5, y: 2.7, z: -4.7,
        height: 0.9,
        radiusBottom: 0.6,
        radiusTop: 0,
        red: 50, green: 150, blue: 50,
      rotationX: 90,
      rotationY: 650
    });
    world.add(snout);

    // Eyes
    var leftEye = new Sphere({
        x: -4.3, y: 3.1, z: -4.6,
        radius: 0.15,
        red: 255, green: 255, blue: 255
    });
    world.add(leftEye);

    var rightEye = new Sphere({
        x: -3.7, y: 3.1, z: -4.6,
        radius: 0.15,
        red: 255, green: 255, blue: 255
    });
    world.add(rightEye);

    // Pupils
    var leftPupil = new Sphere({
        x: -4.3, y: 3.1, z: -4.5,
        radius: 0.07,
        red: 0, green: 0, blue: 0
    });
    world.add(leftPupil);

    var rightPupil = new Sphere({
        x: -3.7, y: 3.1, z: -4.5,
        radius: 0.07,
        red: 0, green: 0, blue: 0
    });
    world.add(rightPupil);

    // Dragon Horns
    var leftHorn = new Cone({
        x: -4.5, y: 3.7, z: -5,
        height: 0.8,
        radiusBottom: 0.2,
        radiusTop: 0,
        red: 80, green: 50, blue: 20,
        rotationX: 20
    });
    world.add(leftHorn);

    var rightHorn = new Cone({
        x: -4.5, y: 3.7, z: -4.5,
        height: 0.8,
        radiusBottom: 0.2,
        radiusTop: 0,
        red: 80, green: 50, blue: 20,
        rotationX: 20
    });
    world.add(rightHorn);

    // WINGS
    var leftWing = new Plane({
        x: -2, y: 3.5, z: -3,
        width: 3,
        height: 2,
        red: 80, green: 180, blue: 80,
        rotationX: 10,
        rotationY: -30,
        rotationZ: 15
    });
    world.add(leftWing);

    var rightWing = new Plane({
        x: -2, y: 3.5, z: -7,
        width: 3,
        height: 2,
        red: 80, green: 180, blue: 80,
        rotationX: 10,
        rotationY: 30,
        rotationZ: -15
    });
    world.add(rightWing);

    // Dragon Legs (with claws)
    for (let i = -1; i <= 1; i += 2) {
        let leg = new Cylinder({
            x: i * 1.5, y: 1.5, z: -5,
            height: 2,
            radius: 0.25,
            red: 40, green: 100, blue: 40
        });
        world.add(leg);

        let claw = new Cone({
            x: i * 1.5, y: 0.4, z: -5.3,
            height: 0.3,
            radiusBottom: 0.1,
            radiusTop: 0,
            red: 139, green: 69, blue: 19,
            rotationX: -120
        });
        world.add(claw);
    }

    // Dragon Spikes (along the back)
    for (let i = 0; i < 5; i++) {
        let spike = new Cone({
            x: i * 0.8 - 2.5, y: 3 + Math.sin(i * 0.5), z: -5,
            height: 0.3,
            radiusBottom: 0.2,
            radiusTop: 0,
            red: 20, green: 60, blue: 20,
            rotationX: 20,
            rotationY: 90
        });
        world.add(spike);
    }

    // GROUND
    var ground = new Plane({
        x: 0, y: 0, z: 0,
        width: 100, height: 100,
        red: 139, green: 69, blue: 19,
        rotationX: -90,
        metalness: 0.5
    });
    world.add(ground);
}

function draw() {
    // No continuous drawing required
}
