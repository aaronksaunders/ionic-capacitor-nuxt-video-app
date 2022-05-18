<template>
    <IonPage>
        <IonHeader :translucent="true">
            <IonToolbar>
                <IonTitle>LOGIN PAGE</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonItem>
                <IonLabel position="floating">
                    EMAIL
                </IonLabel>
                <IonInput type="email" placeholder="Email" v-model="credentials.email"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    PASSWORD
                </IonLabel>
                <IonInput type="password" placeholder="*****" v-model="credentials.password"></IonInput>
            </IonItem>
            <IonButton @click.prevent="doSignIn">
                SIGN IN
            </IonButton>
            <IonButton @click.prevent="$router.push('/create-account')">
                CREATE ACCOUNT
            </IonButton>
        </IonContent>
    </IonPage>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    alertController
} from "@ionic/vue"
import { stringify } from "querystring";

const router = useRouter();
const sbClient = useSupabase();

// local state
const credentials = ref<{ email: string, password: string }>({ email: "", password: "" })

// functions
const doSignIn = async () => {
    const { email, password } = credentials.value
    // make api call
    const { user, session, error } = await sbClient.auth.signIn({
        email,
        password,
    })
    if (error) {
        //https://ionicframework.com/docs/api/alert
        const alert = await alertController
            .create({
                header: 'Error Alert',
                subHeader: 'Error Signing In To Supabase',
                message: error.message,
                buttons: ['OK'],
            });
        await alert.present();
    } else {
        const alert = await alertController
            .create({
                header: 'Success',
                subHeader: 'User Logged In To Supabase',
                buttons: ['OK'],
            });
        await alert.present();
        console.log(user);

        router.replace("/");
    }
}
</script>