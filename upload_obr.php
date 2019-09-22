<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (!empty($_FILES['newFile'])) {

		$errors = array();
		$file_name = $_FILES['newFile']['name'];
		$file_size = $_FILES['newFile']['size'];
		$file_tmp = $_FILES['newFile']['tmp_name'];
		$file_type = $_FILES['newFile']['type'];
		$file_ext = strtolower(end(explode('.',$_FILES['newFile']['name'])));
		
		$extensions = array("txt","jpeg","jpg","png","docx","docs","zip","rar", "pdf");


		if (in_array($file_ext, $extensions))
		{
			if (move_uploaded_file($_FILES['newFile']['tmp_name'], 'uploads/'.$_FILES['newFile']['name'])) {
				echo "OK!";
			} else {
				echo "Error!";
			}
		}
	}
}
?>