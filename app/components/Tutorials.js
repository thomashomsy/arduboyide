

Vue.component('tutorials', {
    template: `
    <div id="tutorials-modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tutorials</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#gettingstarted">Setting Up</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#gameo">Game Objects</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#control">Control</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#variables">Variables</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#compilation">Uploading</a>
                            </li>
                        </ul>
                        
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane container active" id="gettingstarted">
                                <br>
                                <p>
                                Welcome to Arduboy Game Studio!\n\n
                                To toggle the Sprite creator click on Sprites in the top right corner. Click 'add new'
                                to create whatever image your heart desires. Give it a name and save it. Select the dropdown for the setSprite block to change the sprite to whatever name you gave the sprite.

                                
                                <br/> <img src="./tutorials/tutorial_gameobject.png"> <br/>

                                
                                Every block in the workspace will be run each frame (meaning it will run repeatidly) unless you place blocks inside the "When Game Starts" block 
                                which will only be run in the first frame of the game.

                                <br/>To look at Examples, go to "File > Examples" to load up an example project!
                                </p>
                            </div>
                            <div class="tab-pane container fade" id="gameo">
                                <p>
                                <br>
                                In Arduboy Game Studio each tab represents a new GameObject:<br>
                                You're able to add a new GameObject by pressing the '+' button and inputting a name. <br/>
                                <img src="./tutorials/tutorial_tabs.png"><br>
                                Each GameObject has it's own sprite and position and acts independantly of other GameObjects.
                                Using this you can give each GameObject unique logic by dragging blocks into the relevants tab's workspace.
                                <br>
                                <b>Tip:</b> You can use an 'if/do' block with a 'is colliding with' block to check if the current Tab's/GameObject's sprite is colliding with another<br>
                                <img src="./tutorials/iscolliding.png">
.
                                </p>
                            </div>
                            <div class="tab-pane container fade" id="control">
                                <p>
                                The Control section is an important one you can write conditional statements, and print text to the screen.
                                </p>
                                <h5>If/Else Statements</h5>
                                <p>
                                An If block needs a conditional statement which for Arduboy Game Studio is represented as a Gold colour block which can all be found in the 'logic' catergory. These gold blocks can return either true or false.
                                If it returns true all the blocks in the 'do' section will be run, however if logic block returns false the 'else' section will be run instead.
                                For Example:<br>
                                <img src="./tutorials/tutorial_ifelse.png"> <br/>
                                This will set it to 0 constantly, before it's able to run so will always leave the lines of code with test being 1.
                                </p> <h5>Repeat Statements</h5>
                                <p>Repeat statements will run however many times you set it to be, however you can make it interchangable if you want it to keep repeating, for example: <br/>
                                <img src="./tutorials/tutorial_while.png"> <br/>
                                </p>
                            </div>
                            <div class="tab-pane container fade" id="variables">
                                <p>
                                A variable is somewhere we can store numbers or information about our program, to create one go to the Variables selection and press new Variable and give it any name
                                <br/>You should now see it pop like below: <br/>
                                <img src="./tutorials/tutorial_var.png"> <br/>
                                You can now drag some of these into the program and edit them however you wish. Make sure to set them first before trying to call it otherwise, you might run into some issues later on!
                                </p>
                            </div>
                            <div class="tab-pane container fade" id="compilation">
                                <p>
                                To upload your project to the device, you must first of all make sure that, you press the verify button and then wait for a positive confirmation. This checks to make sure your code is okay!<br/>
                                You must then make sure that you've selected a COM Port in your preferences as this is the USB port the program will attempt to upload to making sure your Arduboy is plugged in.<br/>
                                <img src="./tutorials/tutorial_preferences.png"> <br/>
                                Then once this is done, you can press the Upload button and once you've got another positive confirmation, you should see your program running on the screen.
                                <img src="./tutorials/tutorial_confirmation.png"> <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function() {

    },
    methods: {
        showModal() {
            $('#tutorials-modal').modal('show')
        }
    }
})
