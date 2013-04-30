#pragma strict

public var intLives: int = 3;
public var intHealth: int = 100;
public var intDefaultHealth: int = 100; 

var healthBox: Rect;
var livesBox: Rect;

function Start () {

}

function Update () {

	if(intLives == 0){
	
		Destroy(gameObject);
		
	}

}

function OnGUI(){

	GUI.Box(Rect(Screen.width - 100,10,100,25), "Enemy Data") ;
	GUI.Box(healthBox, "Health: " + intHealth) ;
	GUI.Box(livesBox, "Lives: " + intLives) ;
	
}	

public function SetHealthBox(left,top,width,height){

	healthBox = new Rect(left,top,width,height);

}

public function SetLivesBox(left,top,width,height){

	livesBox = new Rect(left,top,width,height);

}

function OnTriggerEnter (other : Collider) {

	//print(other.gameObject.name);
	//print(other.gameObject.GetComponent(jsProjectileData).intTankInstanceID);
	//print(GetInstanceID());

	if(other.gameObject.name == "Projectile(Clone)" && other.gameObject.GetComponent(jsProjectileData).intTankInstanceID != GetInstanceID()){
		 
		 
		 
		 //remove the projectile
		 Destroy(other.gameObject);
		 
		
		 
		 intHealth -= other.GetComponent(jsProjectileData).intDamage;
		 
		 if(intHealth <= 0){
		 
		 	//Killed
		 	//Decrease the tanks lives.
			intLives -= 1;
			
			intHealth = intDefaultHealth;
			
			//Move tank to spawnpoint
			
		 
		 }
		 
		 
		 
	}
       
}