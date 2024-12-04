// variable to hold a reference to our A-Frame world
let world;

// variables to hold our models
let dragon;

function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
    world = new AFrameP5.World('VRScene');

    // set up a background color
    world.setBackground(0, 0, 0);

    // create a base plane
    let basePlane = new AFrameP5.Plane({
        x: 0, y: 0, z: 0, width: 100, height: 100, asset: 'stone', rotationX: -90, repeatX: 100, repeatY: 100
    });
    world.add(basePlane);

    // add a Wavefront (OBJ) model
    // you need to make sure to reference both the OBJ and MTL file here (geometry & material are stored separately)
    // refer to the 'index.html' file to see how these were pre-loaded into the scene
    dragon = new AFrameP5.OBJ({
        asset: 'dragon_obj',
        mtl: 'dragon_mtl',
        x: 0,
        y: 5.5,
        z: -10,
        rotationX: 0,
        rotationY: 180,
        scaleX: 4,
        scaleY: 4,
        scaleZ: 4,
    });
    world.add(dragon);

    // add a GL Tranmission Format (GLTF) model
    // this was also pre-loaded in the 'index.html' file
    // p5js online does not seem to like gltf files
}

function draw() {
    dragon.spinY(0.2);
  
  if (mouseIsPressed) {
		world.moveUserForward(0.05);
	}

	// wrap around!

	// step 1: get the user's position
	// this is an object with three properties (x, y and z)
	var pos = world.getUserPosition();

	// now evaluate
	if (pos.x > 50) {
		world.setUserPosition(-50, pos.y, pos.z);
	}
	else if (pos.x < -50) {
		world.setUserPosition(50, pos.y, pos.z);
	}
	if (pos.z > 50) {
		world.setUserPosition(pos.x, pos.y, -50);
	}
	else if (pos.z < -50) {
		world.setUserPosition(pos.x, pos.y, 50);
	}
}
