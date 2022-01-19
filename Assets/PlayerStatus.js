#pragma strict

var score : int = 0;
private var countdown : float = 30.0;
 
private var scoreStyle : GUIStyle;
 
var coinParticlePrefab : GameObject;
 

var skin : GUISkin;

function CatchCoin(amount : int) 
{
	Instantiate(coinParticlePrefab, transform.position, transform.rotation);
	score += amount;
	PlayerPrefs.SetInt("Score", score);
 
}

function CatchBigCoin(amount : int) 
{
	Instantiate(coinParticlePrefab, transform.position, transform.rotation);
	score += amount;
}

function FinishLine() 
{
	Application.LoadLevel("finish");
}


function OnGUI()
{
	GUI.skin = skin;
	var rect : Rect = Rect(0,0,Screen.width, Screen.height);
	GUI.Label(rect, "COIN:" + score.ToString(),"Score");
	GUI.Label(rect,countdown.ToString("0"), "Count");
}
function Start () {
  
}

function Update () {
	countdown -= Time.deltaTime;
 
	if(countdown <= -0.2)
	{	
		countdown = 0;
		Application.LoadLevel("timeover");	
		
	}
	
}