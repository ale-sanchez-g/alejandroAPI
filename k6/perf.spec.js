import { check, group } from "k6";
import http from "k6/http";
const baseUrl = "https://guarded-scrubland-78590.herokuapp.com";

export default function() {
  group('user flow: returning user', function() {
    group('visit homepage', function() {
        let home = http.get(baseUrl + "/");
        console.log("home time was " + home.timings.duration);    
        check(home, {
                "HOME is status 200": r => r.status === 200,
                "HOME response under 500ms": r => r.timings.duration <= 500,
            });
    });
    group('English Password', function() {
        let pwd = http.get(baseUrl + "/password");
        console.log("PWD time was " + pwd.timings.duration);    
        check(pwd, {
            "PWD is status 200": r => r.status === 200,
            "PWD response under 1000ms": r => r.timings.duration <= 1000,
        });
    });
    group('HASH Password', function() {
        let hash = http.get(baseUrl + "/api/hash?password=mypassword");
        console.log("HASH time was " + hash.timings.duration);    
        check(hash, {
            "HASH is status 200": r => r.status === 200,
            "HASH response under 2000ms": r => r.timings.duration <= 2000,
        });
    });
  });
}