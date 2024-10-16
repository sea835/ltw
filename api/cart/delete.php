<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include_once '../../config/db.php';
include_once '../../model/cart.php';

$db = new db();
$connect = $db->connect();

$cart = new Cart($connect);

$cart->cartId = isset($_GET['cartId']) ? $_GET['cartId'] : die();

if ($cart->delete()) {
    echo json_encode(
        array('message' => 'Cart deleted')
    );
} else {
    echo json_encode(
        array('message' => 'Cart not deleted')
    );
}