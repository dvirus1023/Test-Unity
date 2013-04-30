#pragma strict

var objProjectile: GameObject;

var fltRotationSpeed : float = 5;
var fltMovementSpeed : float = 5;

var fltMaxRotationSpeed : float = 1;
var fltMaxMovementSpeed : float = 1;

var speed : float = 10.0;
var rotationSpeed : float = 100.0;

public var intLives: int = 3;
public var intHealth: int = 100;
public var intDefaultHealth: int = 100;

var shotDelay = .5;

function Start () {

	 while (true) {
        while (!Input.GetKey("space")) yield;
        // Fire bullet here
        FireProjectile();
        animation.Play("Fire");
        //delay the next shot.
        yield WaitForSeconds(shotDelay);
    }
    
}


function FixedUpdate()
{
	// move without physics
	MoveTransform();
	
	// move with physics
	//MovePhysics();

	
//	if(Input.GetKey("space")){
//		
//		Debug.Log("Fire!!!");
//	}
	
 
}

function Update(){
	
//	if(Input.GetButtonDown("Fire1")){
//		Debug.Log("Fire!!!");
//		
//		animation.Play("Fire");
//		
//	}
}


// handle movement using physics
function MovePhysics(){

	// handle forward vs. backward momentum
  	if(rigidbody.velocity.magnitude < fltMaxMovementSpeed)
    {
    
		if(Input.GetAxis("Vertical") > 0){
		
			rigidbody.AddRelativeForce (Vector3.forward * fltMovementSpeed, ForceMode.Impulse);
		
		}
		
		if(Input.GetAxis("Vertical") < 0){
		
			rigidbody.AddRelativeForce (Vector3.back * fltMovementSpeed, ForceMode.Impulse);
		
		}
		
	}
    
    // handle rotation: for a real tank this should drive forces on the left and right treads
    if(rigidbody.angularVelocity.magnitude < fltMaxRotationSpeed){
    
    	//Debug.Log(rigidbody.angularVelocity.magnitude);
    	
    
    
		if(Input.GetAxis("Horizontal") > 0){
	
			rigidbody.AddRelativeTorque( Vector3.up * fltRotationSpeed, ForceMode.Impulse);
		
		}
		
		if(Input.GetAxis("Horizontal") < 0){
		
			rigidbody.AddRelativeTorque(Vector3.down * fltRotationSpeed, ForceMode.Impulse);
		
		}
	
	}
	
}


// handle the movement with simple translation and rotation, instead of physics.
function MoveTransform(){

 	var translation : float = Input.GetAxis ("Vertical") * speed;
    var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
    
    // Make it move 10 meters per second instead of 10 meters per frame...
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
    
     // Move translation along the object's z-axis
    transform.Translate (0, 0, translation);
    // Rotate around our y-axis
    transform.Rotate (0, rotation, 0);
    
}

function OnGUI(){

	GUI.Box(Rect (10,10, 100, 25), "Player Data") ;
	GUI.Box(Rect (10,35, 100, 25), "Health: " + intHealth) ;
	GUI.Box(Rect (10,60, 100, 25), "Lives: " + intLives) ;
	
//	if (GUI.Button (Rect (Screen.width - 100, 0, 100, 50), "Tank Hit")) {
//					
//		//print(gameData.GetComponent(jsGameData).intLives);
//		intLives -= 1;
//	}
	
	GUI.Box (Rect (10,Screen.height - 50, 200, 50), "WASD - Move | Space - Fire");
	

}

function OnTriggerEnter (other : Collider) {

	//print(other.gameObject.name);
	//print(other.gameObject.GetComponent(jsProjectileData).intTankInstanceID);
		 //print(this.gameObject.GetInstanceID());

	if(other.gameObject.name == "Projectile(Clone)" && other.gameObject.GetComponent(jsProjectileData).intTankInstanceID != GetInstanceID()){
		 
		 
		 
		 //remove the projectile
		 Destroy(other.gameObject);
		 
		
		 
		 intHealth -= other.GetComponent(jsProjectileData).intDamage;
		 
		 if(intHealth <= 0){
		 
		 	//Killed
		 	//Decrease the tanks lives.
			intLives -= 1;
			
			intHealth = intDefaultHealth;
		 
		 }
		 
		 
		 
	}
       
}

function FireProjectile(){
	
	var bullet : GameObject;
	//objTank = GameObject.Find("Tank");
	var bulletPosition: Vector3 = transform.TransformPoint( Vector3.forward * 3 );
	
	//Move to make it appear to shoot out of turret
	bulletPosition += new Vector3(0,1,0);
	
	bullet = Instantiate(objProjectile,bulletPosition,objProjectile.transform.rotation);	
	bullet.transform.Rotate(0,90,0);    
    bullet.GetComponent(jsProjectileData).intTankInstanceID = transform.GetInstanceID();
    
    bullet.rigidbody.velocity = transform.TransformDirection(Vector3(0, 0, 50));
    //bullet.rigidbody.AddForce(bullet.transform.forward * 100 * Time.deltaTime);
    // Ignore collisions between the missile and the character controller
    Physics.IgnoreCollision(bullet.collider, transform.root.collider);      
        
}