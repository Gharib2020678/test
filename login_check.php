<?php
session_start();

// قم بتحقق من وجود بيانات تسجيل الدخول في الجلسة
if (isset($_SESSION['id'])) {
  echo 'true'; // تم تسجيل الدخول
} else {
  echo 'false'; // لم يتم تسجيل الدخول
}
?>