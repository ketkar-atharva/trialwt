<?php 

$keyword="";
if(isset($_GET['search'])){
    $keyword=$_GET['search'];

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="GET" action="">
       <input name="search" type="text"  placeholder="enter course">
       <button type="submit">search</button>
    </form>

    <?php if($keyword!=""): ?>
       <p>Results for : <strong><?php echo $keyword ?></strong>  </p>
    <?php endif;?>
</body>
</html>
