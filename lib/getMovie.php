<?php
require 'rotten/rotten_func.php';

function sortMovie($arr){
	$m_arr = array();
	foreach ($arr['data'] as $value) {
		if(get_point($value['name']) !== null){
			$point = get_point($value['name']);
			$poster = get_poster($value['name']);
			echo "<img src='".$poster."'/>";
			echo '<p>'.$value['name'].' : '.$point.'%'.'</p>';
			$m_arr[] = $point;
		}
	}
	$all_score = array_sum($m_arr);
	$score_avg = $all_score / count($m_arr);
	echo '--------------------------';
	echo '<p>平均<strong>'.$score_avg.'%'.'<strong><p>';
	if($score_avg >= 90){
		echo 'センスイイーーーー';
	}else if($score_avg < 90 && $score_avg >= 70){
		echo 'なかなかいい趣味してるね';
	}else if($score_avg < 70 && $score_avg >= 50){
		echo 'なかなかいいんじゃない？';
	}else if($score_avg < 50 && $score_avg >= 30){
		echo 'ちょっと趣味悪いかも';
	}else if($score_avg < 30 && $score_avg >= 0){
		echo 'さいあくーーーー';
	}
}