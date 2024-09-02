export class authService{
    isLoggedIn : boolean = false;
    
    logIn(){
        this.isLoggedIn = true;
    }
    logOut(){
        this.isLoggedIn = false;
    }
    isAuthenticated(){
        return this.isLoggedIn;
    }
}