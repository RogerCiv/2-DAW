<?php

if (isset($_GET['adminPanelView'])) {
    $users = UserRepository::getUsers();
    include("View/adminPanelView.phtml");
    die;
}

if (isset($_POST['changeRole'])) {
    $userId = $_POST['userId'];
    $newRole = $_POST['newRole']; 

    UserRepository::updateUserRole($userId, $newRole);
    include("View/adminPanelView.phtml");
    die;
} 

?>
