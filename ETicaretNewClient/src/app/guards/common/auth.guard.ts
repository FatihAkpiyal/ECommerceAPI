// import { Injectable, inject } from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';



// export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

//   const jwtHelper: JwtHelperService = inject(JwtHelperService)

//   debugger;
//   const token:string = localStorage.getItem("accessToken");

//   const decodeToken = jwtHelper.decodeToken(token);
//   const expirationDate:Date = jwtHelper.getTokenExpirationDate(token)
//   const expired:boolean = jwtHelper.isTokenExpired(token)

//   debugger;

//   return true;
// };

