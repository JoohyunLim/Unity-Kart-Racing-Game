#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("CatchBigCoin",10);
	Destroy(gameObject);
}
function Start () {

}

function Update () {

}