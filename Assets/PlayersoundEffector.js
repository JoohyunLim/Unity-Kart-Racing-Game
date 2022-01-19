#pragma strict

var coinSE : AudioClip;
var jumpSE : AudioClip;
var bigCoinSE : AudioClip;
public static var count : int = 100;
var damageSE : AudioClip;



function Start () { 
 	
}

function Update () {

}

function CatchCoin(amount : int)
{
	audio.PlayOneShot(coinSE);
}
function CatchBigCoin(amount : int)
{
	audio.PlayOneShot(bigCoinSE);
	audio.PlayOneShot(coinSE);
	
}
function Jump()
{
	audio.PlayOneShot(jumpSE);
}
function ApplyDamage(amount : int)
{
	audio.PlayOneShot(damageSE);
}
function Touched(amount : int)
{

}
 


