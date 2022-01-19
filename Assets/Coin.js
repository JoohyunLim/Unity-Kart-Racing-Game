#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("CatchCoin",1);
	Destroy(gameObject);
}
function Start () {

}

function Update () {

}