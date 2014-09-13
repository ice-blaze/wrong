#pragma strict


function Start () {

}

function Update () {
	if (Input.GetKeyDown (KeyCode.Escape) || Input.GetKeyDown (KeyCode.Q)){
		//EditorUtility.DisplayDialog("toto","toto","toto","toto");  
		UnityEditor.EditorApplication.isPlaying = false;
		Application.Quit();
	}
}