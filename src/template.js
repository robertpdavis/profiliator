//Page HTML template
const pageHTML =
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./normalise.css" />
    <link rel="stylesheet" href="./style.css" />
    <title>My Team Profile</title>
</head>

<body>
    <header class="header">
        <h1>My Team Profile</h1>
    </header>

    <!-- Set up bootstrap layout -->
    <main class="container">
        <section class="row">
            <section class="col-12 col-md">
                <div class="row justify-content-around align-items-center justify-content-md-center" id="team-cards">
                    <!-- Team cards dynamically added by backend -->
                    %renderHTML%
                </div>
            </section>
        </section>
    </main>
</body>
</html>`;

module.exports = pageHTML;