<?php
$conn = mysqli_connect("localhost", "root", "", "inventory",4306);

// ADD
if (isset($_POST['add'])) {
    mysqli_query($conn, "INSERT INTO products (name, price) VALUES ('$_POST[name]', '$_POST[price]')");
}

// DELETE
if (isset($_GET['delete'])) {
    mysqli_query($conn, "DELETE FROM products WHERE id=$_GET[delete]");
}
?>

<!-- ADD FORM -->
<form method="POST">
    Name:  <input type="text" name="name">
    Price: <input type="text" name="price">
    <button name="add">Add</button>
</form>

<!-- SHOW PRODUCTS -->
<?php
$result = mysqli_query($conn, "SELECT * FROM products");
while ($row = mysqli_fetch_assoc($result)) {
    echo $row['id'] . " - " . $row['name'] . " - " . $row['price'];
    echo " <a href='?delete=" . $row['id'] . "'>Delete</a><br>";
}
?>