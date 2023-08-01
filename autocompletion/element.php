<?php
$conn = new PDO("mysql:host=localhost;dbname=autocompletion;charset=UTF8", "root", "Clement2203$");

if (isset($_GET['id'])) {
    $id = htmlspecialchars($_GET['id']);
    $sql = "SELECT * FROM recherche WHERE id = " . $id . " ";
    $result = $conn->query($sql)->fetch(PDO::FETCH_ASSOC);
?>
    <h2><?php echo $result["nom"]; ?></h2>

<?php
}
?>

