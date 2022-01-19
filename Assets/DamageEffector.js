#pragma strict
private var effectFlag : boolean;
private var originalColor : Color;

function Start () {
	effectFlag = false;
	originalColor = renderer.material.color;
}

function Update () {
	if(effectFlag)
	{
		renderer.material.color = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));
	}
}

function ApplyDamage(amount: int)
{
	effectFlag = true;
	yield WaitForSeconds(0.3);
	effectFlag = false;
	renderer.material.color = originalColor;
}