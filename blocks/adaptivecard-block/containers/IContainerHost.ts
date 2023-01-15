export interface IContainerHost {
    //hostConfig?: any;
    getHostConfig: (isDark: boolean)=>any;
    containerClass: string;
    cardAreaBackgroundColor: string;
}