#pragma strict
private var countdown : float = 30.0;

function OnTriggerEnter(other: Collider)
{
	if(countdown <= 5.0){
		other.gameObject.SendMessage("FinishLine");
	}
}
function Start () {

}

function Update () {
	countdown -= Time.deltaTime;
}