#pragma strict 

public var GameMode: enmGameMode;

var bolGameOver: boolean = false;

var PlayerTank: GameObject;
var EnemyTank: GameObject;
var ClassicMap: GameObject;

enum enmGameMode { Begin,Playing, GameOver}

function Start () {

	GameMode = enmGameMode.Begin;
	
	var playerTank: GameObject;
	var enemyTank1: GameObject;
	var map: GameObject;
	
	map = Instantiate(ClassicMap,new Vector3(0,0,0), Quaternion.identity);	
	playerTank = Instantiate(PlayerTank,map.transform.Find("Spawn Area 1").Find("SpawnPoint1").position, Quaternion.identity);	
	enemyTank1 = Instantiate(EnemyTank,map.transform.Find("Spawn Area 2").Find("SpawnPoint2").position, Quaternion.identity);	
	
	//setup enemy health boxes
	enemyTank1.GetComponent(jsEnemyTankData).SetHealthBox(Screen.width - 100,35,100,25);	
	
	//setup lives boxes
	enemyTank1.GetComponent(jsEnemyTankData).SetLivesBox(Screen.width - 100,60,100,25);
	

}

function Update () {


	//if(intLives == 0){
	
		//bolGameOver = true;
		
	//}
	
	

}



function OnGUI(){
	
//	if(bolGameOver){
//	
//		GUI.Box(Rect(Screen.width - (Screen.width/2) - 37.5, Screen.height - (Screen.height/2) - 37.5, 75,75),"Game Over");
//	}
}

