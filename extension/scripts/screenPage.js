function gbdScreen()
{
    let urlLogo = chrome.extension.getURL("images/logo.jpg")
    let urlCog = chrome.extension.getURL("images/cog-8x.png")
    let gbdScreen = 
    `
    <div class="container-fluid">    
    <div id="gbdScreen">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="box-shadow: 1px 1px 1px 1px black;
        border-radius: 20px;">

            <a class="navbar-brand" href="#breakdown"><img src="${urlLogo}" width="30" height="30" class="d-inline-block align-top"> GitBreakdown</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a id="gbdHomeBtn" class="nav-link" href="#breakdown">Home</a>
                </li>

                <li class="nav-item dropdown active">
                    
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Metrics
                    </a>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#breakdown/commits">Commits</a>
                        <a class="dropdown-item" href="#breakdown/issues">Issues</a>
                        <a class="dropdown-item" href="#breakdown/branches">Branches</a>
                        <a class="dropdown-item" href="#breakdown/pr">Pull Request</a>
                    </div>

                </li>

                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <button type="button" class="btn btn-outline-info" id="settingsButton" data-toggle="modal" data-target="#settingsModal">
                            <img src="${urlCog}" width="30" height="30" class="d-inline-block align-top">
                        </button>
                    </li>
                </ul>

                <div class="modal fade" id="settingsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h2 class="modal-title">Settings</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <form>
                                    <div id="formInput">
                                        <label for="SprintLength">Sprint length in days: </label>
                                        <input type="number" name="SprintLength" id="sprintLength" min="1" max="10">
                                    </div>
                                </form>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" id="settingsSave">Save</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </nav>

        <div class="gbdContent">
        <div class="row">



        <div class="col">
        <table class="table table-striped table-dark ranking">
            <thead>
                <tr>
                <th scope="col">Rank</th>
                <th scope="col">User</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>pxpc2</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>wdvictor</td>
                        <td>420</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>baea</td>
                        <td>120</td>
                    </tr>
                    </tbody>
                </table>
                </div>

        <div class="col">
            <div class="row">
                <div class="card text-white bg-dark mb-3">
                    <canvas id="issuesDashboard"></canvas>   
                </div>
            </div>

            <div class="row">
                <div class="card text-white bg-dark mb-3">
                    <canvas id="branchesDashboard"></canvas> 
                </div>
            </div>
        </div>

        <div class="col">
            <div class="row">

                <div class="card text-white bg-dark mb-3 right">
                    <canvas id="commitsDashboard"></canvas>
                </div>
            </div>

            <div class="row">
                <div class="card text-white bg-dark mb-3 right">
                    <canvas id="prsDashboard"></canvas>   
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    `
    return gbdScreen
}

