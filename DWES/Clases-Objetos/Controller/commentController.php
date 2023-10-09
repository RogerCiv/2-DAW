<?php

if(!empty($_POST['newComment'])) {
    CommentRepository::newComment($_POST);
}

?>