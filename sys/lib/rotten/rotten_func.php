<?php

// require_once('../yuhhh/SaveImage.php');
// require_once('../yuhhh/Translate.php');
define("ROTTEN_API", "qxweasrbyx8wzpzgse3g67n7");

function get_poster_small($search_str){
  
  $rotten_str = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='.ROTTEN_API.'&q='.$search_str.'&page_limit=50';
  $rotten_str = preg_replace('/\s+/', '+', $rotten_str);
  
  
  $movie_info = file_get_contents($rotten_str);
  
  $info = json_decode(trim($movie_info));
  
  foreach( $info->movies as $value){
	if(strpos( $value->posters->thumbnail ,'poster_default.gif') === false){
		if($value->ratings->critics_score > 80) {
			$path = preg_replace('/\s+/', '_', $value->title);
			$path = "posters/".$path.".jpg";
			saveimage($value->posters->original,$path);
			
			//$title = translate($value->title);
			//$detail = translate($value->critics_consensus);
			echo $value->title."<br>";
			echo $value->d."<br>";
			echo $value->ratings->critics_score."<br><br>";
		}
	}
  }
}
function get_point($search_str){
  
  $rotten_str = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='.ROTTEN_API.'&q='.$search_str.'&page_limit=1';
  $rotten_str = preg_replace('/\s+/', '+', $rotten_str);
  
  
  $movie_info = file_get_contents($rotten_str);
  
  $info = json_decode(trim($movie_info));
  $movie = $info->movies;
  if(count($movie) > 0){
  	return $movie[0]->title."/".$movie[0]->ratings->critics_score;
  }else{
  	return null;
  }
}
function get_poster($search_str){
  
  $rotten_str = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='.ROTTEN_API.'&q='.$search_str.'&page_limit=1';
  $rotten_str = preg_replace('/\s+/', '+', $rotten_str);
  
  $movie_info = file_get_contents($rotten_str);
  
  $info = json_decode(trim($movie_info));
  $movie = $info->movies;
  if(count($movie) > 0){
  	return $movie[0]->posters->thumbnail;
  }else{
  	return null;
  }
}

function get_opening(){
  
  $rotten_str = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?limit=16&country=us&apikey='.ROTTEN_API;
  $rotten_str = preg_replace('/\s+/', '+', $rotten_str);
  
  
  $movie_info = file_get_contents($rotten_str);
  
  $info = json_decode(trim($movie_info));
  
  foreach( $info->movies as $value){
	if(strpos( $value->posters->thumbnail ,'poster_default.gif') === false){
		if($value->ratings->critics_score > 60) {
			$path = preg_replace('/\s+/', '_', $value->title);
			$path = "posters/".$path.".jpg";
			saveimage($value->posters->original,$path);
			
			$title = translate($value->title);
			$detail = translate($value->critics_consensus);
			echo $title." ¡Ú".$value->title."¡Û"."<br>";
			echo $detail."<br>";
			echo $value->ratings->critics_score."<br><br>";
		}
	}
  }
}


function get_boxoffice_poster_small(){
  
  $rotten_str = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey='.ROTTEN_API.'&page_limit=50';
  $rotten_str = preg_replace('/\s+/', '+', $rotten_str);
  
  $movie_info = file_get_contents($rotten_str);
  
  $info = json_decode(trim($movie_info));
  
  foreach( $info->movies as $value){
	
	if(strpos( $value->posters->thumbnail ,'poster_default.gif') === false){
		echo '<img src="'.$value->posters->thumbnail.'" />';
	}
  }
}
