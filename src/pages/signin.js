import React from 'react'

function SignIn() {
    return (
        <div>
            <div class="input-group margin-bottom-sm">
                <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true"></i></span>
                <input class="form-control" type="text" placeholder="Email address"/>
            </div>
        <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-key fa-fw" aria-hidden="true"></i></span>
            <input class="form-control" type="password" placeholder="Password"/>
        </div>
        </div>
    )
}
export default SignIn;