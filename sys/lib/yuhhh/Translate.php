<?php

define("BEING_APPID","B295058703C298B3FAECEA7A9422893C71CFCAF8");

class Translator{
	function translateToJa($txt){
		$url = "http://api.microsofttranslator.com/v2/Http.svc/Translate?appId=".BEING_APPID."&text=".$txt."&to=ja&from=en&top=100";
		$title = simplexml_load_file($url);
		return $title;
	}
	function translateToEn($txt){
		$url = "http://api.microsofttranslator.com/v2/Http.svc/Translate?appId=".BEING_APPID."&text=".$txt."&to=en&from=ja&top=100";
		$title = simplexml_load_file($url);
		return $title;
	}
}