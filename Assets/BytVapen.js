var weapons : GameObject[]; // Array of Weapons
var model : GameObject[];

 
function Start () {
 
SelectWeapon(0);//select the weapon you want to start with. "0" is the first weapon in your array
SelectModel(0);
}
 
function Update () {
 
if (Input.GetKeyDown("1")) SelectWeapon(0); //selects the first weapon when '1' is pressed
if (Input.GetKeyDown("1")) SelectModel(0);
 
if (Input.GetKeyDown("2")) SelectWeapon(1); //selects the second weapon when '2' is pressed
if (Input.GetKeyDown("2")) SelectModel(1);

if(Input.GetKeyDown("3")) SelectWeapon(2);
if(Input.GetKeyDown("3")) SelectModel(2);
}
 
function SelectWeapon(index : int){
 
for(var obj:GameObject in weapons)obj.SetActive(false); //these lines just cycle through the weapons in our array
 
weapons[index].SetActive(true); //selects one to be active, and the rest to be inactive
 
}

function SelectModel(index : int){
 
for(var obj:GameObject in model)obj.SetActive(false); //these lines just cycle through the weapons in our array
 
model[index].SetActive(true); //selects one to be active, and the rest to be inactive
 
}