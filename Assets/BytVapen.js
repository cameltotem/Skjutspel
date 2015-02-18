#pragma strict

var Weapon01 : GameObject;
var Weapon02 : GameObject;
var Gun : GameObject;
var bazooka: GameObject;

function Update() {
if (Input.GetKeyDown(KeyCode.Q)) 
{ 
SwapWeapons();
}

}
// Byter vapen och modell, inga animationer inlagda dock(men det läggs i klassen)
function SwapWeapons()
{
if (Weapon01.active == true && Gun.active == true)

{
Weapon01.SetActiveRecursively(false);
Gun.SetActiveRecursively(false);
Weapon02.SetActiveRecursively(true);
bazooka.SetActiveRecursively(true);
}
else
{
Weapon01.SetActiveRecursively(true);
Gun.SetActiveRecursively(true);
Weapon02.SetActiveRecursively(false);
bazooka.SetActiveRecursively(false);
}
}