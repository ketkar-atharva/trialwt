<?php
session_start();

if($_SERVER['REQUEST_METHOD']=="POST"){
      if(isset($_POST['step1'])){
        $_SESSION['name']=$_POST['name'];
        $_SESSION['email']=$_POST['email'];
        $step=2;
      }
      if(isset($_POST['step2'])){
        $_SESSION['city']=$_POST['city'];
        $_SESSION['address']=$_POST['address'];
        $step=3;
      }
}else{
    $step=1;
}
?>

<!-- step 1 -->
<?php if($step==1):  ?>
    <form method="POST">
        Name: <input name="name" type="text" placeholder="enter name"><br>
        email: <input name="email" type="email" placeholder="enter email" ><br>
        <button type="submit" name="step1" > Next</button>    
    </form>

<!-- step 2 -->
<?php elseif($step==2):  ?>
    <form method="POST">
        City: <input name="city" type="text" placeholder="enter city"><br>
        address: <input name="address" type="text" placeholder="enter address" ><br>
        <button type="submit" name="step2" > Next</button>    
</form>

<!-- step 3 -->
<?php elseif($step==3):?>
    <p>
        <p>Name: <?php echo $_SESSION['name']; ?>  </p>
        <p>city: <?php echo $_SESSION['city']; ?>  </p>
        <p>email: <?php echo $_SESSION['email']; ?>  </p>
        <p>address: <?php echo $_SESSION['address']; ?>  </p>

    </p>
<?php endif; ?>

