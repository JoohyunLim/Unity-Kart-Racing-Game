#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("Jump");
}
function Start () {

}

function Update () {

}