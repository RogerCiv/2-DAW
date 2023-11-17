<?php

if (isset($_GET['adminPanelView'])) {
    $users = UsersRepository::getUsers();
    include("View/adminPanelView.phtml");
    die;
}

if (isset($_POST['changeRole'])) {
    $userId = $_POST['userId'];
    $newRole = $_POST['newRole']; 

    UsersRepository::updateUserRole($userId, $newRole);
    include("View/adminPanelView.phtml");
    die;
} 



?>