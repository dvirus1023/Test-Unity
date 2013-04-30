#pragma strict

var gameData: GameObject;
var objProjectile: GameObject;

//var forwardSpeed : float = 3;
//var turnSpeed : float = .5;

public var intLives: int = 3;
public var intHealth: int = 100;
public var intDefaultHealth: int = 100;

var shotDelay = .5;

function Start () {

    while (true) {
        while (!Input.GetKey("space")) yield;
        // Fire bullet here
        FireProjectile();
        //delay the next shot.
        yield WaitForSeconds(shotDelay);
    }
    
}

function Update () {

	//var moveSpeed = Input.GetAxis("Vertical") * forwardSpeed;
	//var turnAmount = Input.GetAxis("Horizontal") * turnSpeed;
	
	//transform.Rotate(0,turnAmount,0);
	//rigidbody.AddRelativeForce(moveSpeed,0,0);

}

function FixedUpdate(){

	//if(Input.GetKey("space")){
		
		//FireProjectile();
		
	//}

}

function OnGUI(){

	GUI.Box(Rect (10,10, 100, 25), "Health: " + intHealth) ;
	GUI.Box(Rect (10,35, 100, 25), "Lives: " + intLives) ;
	
	if (GUI.Button (Rect (Screen.width - 100, 0, 100, 50), "Tank Hit")) {
			
		
		//print(gameData.GetComponent(jsGameData).intLives);
		intLives -= 1;
	}
	
	GUI.Box (Rect (10,Screen.height - 50, 100, 50), "WASD - Move | Space - Fire");
	

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