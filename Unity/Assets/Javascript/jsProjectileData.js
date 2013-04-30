#pragma strict

var intSpeed: int = 0;
public var intDamage: int = 50;
public var intTankInstanceID: int;

function Start () {

}

function Update () {

	//transform.position = Vector3.MoveTowards(transform.position, GameObject.Find("Tank").transform.position, intSpeed*Time.deltaTime);
	transform.rigidbody.AddForce(transform.forward * intSpeed);

}

public function Fire(){

	intSpeed = 100;

}