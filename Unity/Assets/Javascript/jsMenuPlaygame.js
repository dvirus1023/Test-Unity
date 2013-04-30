#pragma strict

function Start () {

}

function Update () {

}

function OnMouseEnter(){

	renderer.material.color = Color.green;
}

function OnMouseExit(){
	renderer.material.color = Color.white;
}

function OnMouseDown(){
	renderer.material.color = Color.red;
}

function OnMouseUp(){
	renderer.material.color = Color.green;
	
	
	switch(this.gameObject.name){
	
		case "txtPlayGame":
		
			Application.LoadLevel("Main");
			
//		case "txtGriggsScene":
//		
//			Application.LoadLevel("Griggs");
//		
		case "txtQuitGame":
		
			Application.Quit();
		
	
	}	
	
	
}