#pragma strict

public var GameMode: enmGameMode;

var bolGameOver: boolean = false;

var PlayerTank: GameObject;
var EnemyTank: GameObject;
var ClassicMap: GameObject;

var SpawnPoint1: Transform;
var SpawnPoint2: Transform;
var SpawnPoint3: Transform;

//enum enmGameMode { Begin,Playing, GameOver}

function Start () {

	GameMode = enmGameMode.Begin;
	
	var playerTank: GameObject;
	var enemyTank1: GameObject;
	var map: GameObject;
	
	map = Instantiate(ClassicMap,new Vector3(0,0,0), Quaternion.identity);	
	playerTank = Instantiate(PlayerTank,map.transform.Find("Spawn Area 1").Find("SpawnPoint1").position, Quaternion.identity);	
	enemyTank1 = Instantiate(EnemyTank,map.transform.Find("Spawn Area 2").Find("SpawnPoint2").position, Quaternion.identity);	
	
	//setup enemy health boxes
	enemyTank1.GetComponent(jsEnemyTankData).SetHealthBox(110,10,100,25);	
	
	//setup lives boxes
	enemyTank1.GetComponent(jsEnemyTankData).SetLivesBox(110,35,100,25);
	

}

function Update () {


	//print(GameObject.Find("Classic").transform.Find("Spawn Area 1").Find("SpawnPoint1"));
	//if(intLives == 0){
	
		//bolGameOver = true;
		
	//}
	
	//if(GameMode == enmGameMode.Begin){
	
		//Initialize all game objects.
		//Instantiate(objTank,SpawnPoint1.position, Quaternion.identity);	
		//objTank.AddComponent("jsTankData");    
	    //GameMode = enmGameMode.Playing;
	
	//}

}



function OnGUI(){

	
	
	
	if(bolGameOver){
	
		GUI.Box(Rect(Screen.width - (Screen.width/2) - 37.5, Screen.height - (Screen.height/2) - 37.5, 75,75),"Game Over");
	}
}

