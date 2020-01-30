<?php
	$mysqli = false;
	function connectDB () {
		global $mysqli;
		$mysqli = new mysqli("localhost", "root", "", "5tero4kaBase");
		$mysqli->query("SET NAMES 'utf-8'");

	}

	function closeDB () {
		global $mysqli;
		$mysqli->close ();
	}
?>