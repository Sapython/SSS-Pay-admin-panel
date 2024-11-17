import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataProvider } from '../providers/data.provider';
import { AuthenticationService } from './authentication.service';
import { AlertsAndNotificationsService } from './uiService/alerts-and-notifications.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private authService: AuthenticationService,private dataProvider:DataProvider,private alertify:AlertsAndNotificationsService) {}
  async getRequestOptions(extraData?:any,method?:string,noAuth:boolean=false){
    if (method==undefined || method === ''){
      method = 'POST'
    }
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    console.log("extraData",extraData)
    if (!noAuth){
      const userToken = await this.dataProvider.userInstance.getIdToken()
      var data = JSON.stringify({
        token: userToken,
        uid: this.dataProvider.userID,
        ...extraData
      });
    } else {
      var data = JSON.stringify(extraData);
    }
    console.log("request data",data)
    var requestOptions: RequestInit = {
      method: method,
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    };
    console.log("requestOptions",requestOptions)
    return requestOptions
  }
  checkAuth() {
    this.authService.user.subscribe((user) => {
      if (user) {
        this.authService.getIdToken(user).then((userToken) => {
          console.log('UserToken', userToken, user.uid);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          let data = JSON.stringify({
            token: userToken,
            uid: user.uid,
          });
          var requestOptions:RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow',
          };
          fetch("http://127.0.0.1:8081/", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.error){
              this.alertify.presentToast(result.error,'error');
            } else {
              this.alertify.presentToast('Login Successful','info');
            }
          })
          .catch(error => console.log('error', error));
        });
      }
    });
  }

  async changeUserAccess(userId:string,accessLevel:string){
    const requestOptions =  await this.getRequestOptions({changeUserId:userId,changeAccessLevel:accessLevel});
    const mainResponse = await fetch(environment.serverBaseUrl + '/admin/changeAccess',requestOptions)
    const data = await mainResponse.json()
    return data
  }

  async getReport(data:any){
    const requestOptions =  await this.getRequestOptions(data);
    const mainResponse = await fetch(environment.serverBaseUrl + '/admin/getTransactions',requestOptions)
    const resData = await mainResponse.json()
    if (resData.response_code == 1){
      console.log("Qr data ",resData)
      return resData
    } else {
      throw resData
    }
  }

  async checkUpiPaymentStatus(transactionId:string,userId:string,date:string){
    // convert date into dd-mm-yyyy format
    const requestOptions =  await this.getRequestOptions({
      transactionId:transactionId,
      uid:userId,
      date:date
    },'POST',true);
    const mainResponse = await fetch(environment.serverBaseUrl + '/upi/status',requestOptions)
    const resData = await mainResponse.json()
    return resData
  }

  async onboardingForAepsKyc(){
    if (this.dataProvider.userData?.kycStatus != 'approved'){
      return false
    }
    const requestOptions =  await this.getRequestOptions();
    try {
      var mainResponse = await fetch(environment.serverBaseUrl + '/onboarding/setup',requestOptions)
      mainResponse.text().then((data)=>{
        console.log("onboarding setup response",data)
      }).catch((err)=>{
        console.log("onboarding setup response error",err)
      })
    } catch (error:any) {
      console.log("Error kyc 33",error.message)
    }
    return
    // alert('Got response')
    // const data = await mainResponse.json()
    // // alert(data)
    // console.log("Onboarding ",data,JSON.stringify(data))
    // if (data.response_code == 1){
    //   return data
    // } else {
    //   throw data
    // }
  }

  async getAepsKycStatus(){
    if (this.dataProvider.userData?.kycStatus != 'approved'){
      return false
    }
    const requestOptions =  await this.getRequestOptions({mobile:this.dataProvider.userData.phoneNumber,merchantcode:this.dataProvider.userData.userId});
    const mainResponse = await fetch(environment.serverBaseUrl + '/onboarding/status',requestOptions)
    const data = await mainResponse.json()
    return data
  }

  async lockUser(additionalData:any){
    const requestOptions =  await this.getRequestOptions(additionalData);
    const mainResponse = await fetch(environment.serverBaseUrl + '/admin/blockUser',requestOptions)
    const data = await mainResponse.json()
    return data
  }

  async unlockUser(additionalData:any){
    const requestOptions =  await this.getRequestOptions(additionalData);
    const mainResponse = await fetch(environment.serverBaseUrl + '/admin/unblockUser',requestOptions)
    const data = await mainResponse.json()
    return data
  }

  async deleteUser(additionalData:any){
    const requestOptions =  await this.getRequestOptions(additionalData);
    const mainResponse = await fetch(environment.serverBaseUrl + '/admin/deleteUser',requestOptions)
    const data = await mainResponse.json()
    return data
  }
}
