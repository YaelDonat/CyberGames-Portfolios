<!DOCTYPE html PUBLIC "-//W3C//Ddiv XHTML 1.0 divansitional//EN" "http://www.w3.org/div/xhtml1/Ddiv/xhtml1-divansitional.ddiv">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<style>
@media only screen and (max-width: 600px) {
.inner-body {
width: 100% !important;
}

.footer {
width: 100% !important;
}
}

@media only screen and (max-width: 500px) {
.button {
width: 100% !important;
}
}
</style>
</head>
<body>

<div class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<div>
<div align="center">
<div class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
{{ $header ?? '' }}

<!-- Email Body -->
<div>
<div class="body" width="100%" cellpadding="0" cellspacing="0">
<div class="inner-body" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<!-- Body content -->
<div>
<div class="content-cell">
{{ Illuminate\Mail\Markdown::parse($slot) }}

{{ $subcopy ?? '' }}
</div>
</div>
</div>
</div>
</div>

{{ $footer ?? '' }}
</div>
</div>
</div>
</div>
</body>
</html>
