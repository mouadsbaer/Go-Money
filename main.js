function calculerMensualite(montant, tauxAnnuel, dureeAnnees) {
    // Conversion en nombres
    montant = parseFloat(montant);
    tauxAnnuel = parseFloat(tauxAnnuel);
    dureeAnnees = parseFloat(dureeAnnees);

    const tauxMensuel = tauxAnnuel / 100 / 12;
    const dureeMois = dureeAnnees * 12;

    const mensualite = (montant * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dureeMois));

    return {
        mensualite: mensualite,
        dureeMois: dureeMois
    };
}

function calculerTotalInterets(mensualite, dureeMois, montantPret) {
    const totalRembourse = mensualite * dureeMois;
    const totalInterets = totalRembourse - montantPret;
    return totalInterets;
}

function calculerTotalARembourser(montantPret, totalInterets) {
    return parseFloat(montantPret) + parseFloat(totalInterets);
}

document.getElementById("btncontinuer").addEventListener("click", function (event) {
    event.preventDefault();

    const resultatDiv = document.getElementById("resultatDiv");
    const message_d_erreur = document.getElementById("message_erreur");

    const type = document.getElementById("type");
    const type_d = document.getElementById("type_pret_d");
    const montant_souhaite = document.getElementById("m_s");
    const montant_s = document.getElementById("montant_s_d");
    const taux_applique = document.getElementById("taux_appliquer");
    const duree_re = document.getElementById("d_r");
    const mensuel = document.getElementById("mensualite");
    const salaire_mensuel = document.getElementById("s_m");
    const total_interets = document.getElementById("total_d");
    const montant_rem = document.getElementById("m_a_r");

    // Validation type
    if (type.selectedIndex === 0) {
        type_d.textContent = "veuillez sélectez un type !";
    } else {
        type_d.textContent = type.options[type.selectedIndex].text;
    }

    // Validation montant
    if (montant_souhaite.value === "" || isNaN(montant_souhaite.value)) {
        montant_s.textContent = "veuillez saisir un montant valide";
    } else {
        montant_s.textContent = parseFloat(montant_souhaite.value).toLocaleString() + " DH";
    }

    // Application des taux et calculs
    let tauxValue = 0;

    switch (type.selectedIndex) {
        case 0:
            message_d_erreur.style.display = "flex";
            break;
        case 1:
            if (montant_souhaite.value === "" || duree_re.value === "" || salaire_mensuel.value === "") {
                message_d_erreur.style.display = "flex";
                break;
            } else {
                // CALCUL PREALABLE pour vérifier la condition
                tauxValue = 4;
                const resultats1 = calculerMensualite(montant_souhaite.value, tauxValue, duree_re.value);
                
                // VÉRIFICATION DE LA CONDITION 40% DU SALAIRE
                if (parseFloat(salaire_mensuel.value) * 0.4 < resultats1.mensualite) {
                    message_d_erreur.style.display = "flex";
                    message_d_erreur.textContent = "Nous excusons!! Votre salaire n'est pas suffisant!";
                    resultatDiv.style.display = "none";
                    break;
                }
                
                // Si la condition est respectée, afficher les résultats
                message_d_erreur.style.display = "none";
                resultatDiv.style.display = "block";
                taux_applique.textContent = "4% annuel";
                const totalInterets1 = calculerTotalInterets(resultats1.mensualite, resultats1.dureeMois, parseFloat(montant_souhaite.value));
                const montant_rembourse1 = calculerTotalARembourser(parseFloat(montant_souhaite.value), totalInterets1);
                mensuel.textContent = resultats1.mensualite.toFixed(2) + " DH";
                total_interets.textContent = totalInterets1.toFixed(2) + " DH";
                montant_rem.textContent = montant_rembourse1.toFixed(2) + " DH";
                break;
            }
        case 2:
            if (montant_souhaite.value === "" || duree_re.value === "" || salaire_mensuel.value === "") {
                message_d_erreur.style.display = "flex";
                break;
            } else {
                // CALCUL PREALABLE pour vérifier la condition
                tauxValue = 4.5;
                const resultats2 = calculerMensualite(montant_souhaite.value, tauxValue, duree_re.value);
                
                // VÉRIFICATION DE LA CONDITION 40% DU SALAIRE
                if (parseFloat(salaire_mensuel.value) * 0.4 < resultats2.mensualite) {
                    message_d_erreur.style.display = "flex";
                    message_d_erreur.textContent = "Nous excusons!! Votre salaire n'est pas suffisant!";
                    resultatDiv.style.display = "none";
                    break;
                }
                
                message_d_erreur.style.display = "none";
                resultatDiv.style.display = "block";
                taux_applique.textContent = "4.5% annuel";
                const totalInterets2 = calculerTotalInterets(resultats2.mensualite, resultats2.dureeMois, parseFloat(montant_souhaite.value));
                const montant_rembourse2 = calculerTotalARembourser(parseFloat(montant_souhaite.value), totalInterets2);
                mensuel.textContent = resultats2.mensualite.toFixed(2) + " DH";
                total_interets.textContent = totalInterets2.toFixed(2) + " DH";
                montant_rem.textContent = montant_rembourse2.toFixed(2) + " DH";
                break;
            }
        case 3:
            if (montant_souhaite.value === "" || duree_re.value === "" || salaire_mensuel.value === "") {
                message_d_erreur.style.display = "flex";
                break;
            } else {
                // CALCUL PREALABLE pour vérifier la condition
                tauxValue = 5;
                const resultats3 = calculerMensualite(montant_souhaite.value, tauxValue, duree_re.value);
                
                // VÉRIFICATION DE LA CONDITION 40% DU SALAIRE
                if (parseFloat(salaire_mensuel.value) * 0.4 < resultats3.mensualite) {
                    message_d_erreur.style.display = "flex";
                    message_d_erreur.textContent = "Nous excusons!! Votre salaire n'est pas suffisant!";
                    resultatDiv.style.display = "none";
                    break;
                }
                
                message_d_erreur.style.display = "none";
                resultatDiv.style.display = "block";
                taux_applique.textContent = "5% annuel";
                const totalInterets3 = calculerTotalInterets(resultats3.mensualite, resultats3.dureeMois, parseFloat(montant_souhaite.value));
                const montant_rembourse3 = calculerTotalARembourser(parseFloat(montant_souhaite.value), totalInterets3);
                mensuel.textContent = resultats3.mensualite.toFixed(2) + " DH";
                total_interets.textContent = totalInterets3.toFixed(2) + " DH";
                montant_rem.textContent = montant_rembourse3.toFixed(2) + " DH";
                break;
            }
        case 4:
            if (montant_souhaite.value === "" || duree_re.value === "" || salaire_mensuel.value === "") {
                message_d_erreur.style.display = "flex";
                break;
            } else {
                // CALCUL PREALABLE pour vérifier la condition
                tauxValue = 6;
                const resultats4 = calculerMensualite(montant_souhaite.value, tauxValue, duree_re.value);
                
                // VÉRIFICATION DE LA CONDITION 40% DU SALAIRE
                if (parseFloat(salaire_mensuel.value) * 0.4 < resultats4.mensualite) {
                    message_d_erreur.style.display = "flex";
                    message_d_erreur.textContent = "Nous excusons!! Votre salaire n'est pas suffisant!";
                    resultatDiv.style.display = "none";
                    break;
                }
                
                message_d_erreur.style.display = "none";
                resultatDiv.style.display = "block";
                taux_applique.textContent = "6% annuel";
                const totalInterets4 = calculerTotalInterets(resultats4.mensualite, resultats4.dureeMois, parseFloat(montant_souhaite.value));
                const montant_rembourse4 = calculerTotalARembourser(parseFloat(montant_souhaite.value), totalInterets4);
                mensuel.textContent = resultats4.mensualite.toFixed(2) + " DH";
                total_interets.textContent = totalInterets4.toFixed(2) + " DH";
                montant_rem.textContent = montant_rembourse4.toFixed(2) + " DH";
                break;
            }
        case 5:
            if (montant_souhaite.value === "" || duree_re.value === "" || salaire_mensuel.value === "") {
                message_d_erreur.style.display = "flex";
                break;
            } else {
                // CALCUL PREALABLE pour vérifier la condition
                tauxValue = 9;
                const resultats5 = calculerMensualite(montant_souhaite.value, tauxValue, duree_re.value);
                
                // VÉRIFICATION DE LA CONDITION 40% DU SALAIRE
                if (parseFloat(salaire_mensuel.value) * 0.4 < resultats5.mensualite) {
                    message_d_erreur.style.display = "flex";
                    message_d_erreur.textContent = "Nous excusons!! Votre salaire n'est pas suffisant!";
                    resultatDiv.style.display = "none";
                    break;
                }
                
                message_d_erreur.style.display = "none";
                resultatDiv.style.display = "block";
                taux_applique.textContent = "9% annuel";
                const totalInterets5 = calculerTotalInterets(resultats5.mensualite, resultats5.dureeMois, parseFloat(montant_souhaite.value));
                const montant_rembourse5 = calculerTotalARembourser(parseFloat(montant_souhaite.value), totalInterets5);
                mensuel.textContent = resultats5.mensualite.toFixed(2) + " DH";
                total_interets.textContent = totalInterets5.toFixed(2) + " DH";
                montant_rem.textContent = montant_rembourse5.toFixed(2) + " DH";
                break;
            }
    }

    montant_souhaite.value = "";
    duree_re.value = "";
    salaire_mensuel.value = "";
});

document.getElementById("confirmer").addEventListener("click", function (event) {
    event.preventDefault();

    const suivant = document.getElementById("next");
    suivant.style.display = "block";
});

document.querySelector(".cancel").addEventListener("click", function (event) {
    const suivant = document.getElementById("next");
    suivant.style.display = "none";
});