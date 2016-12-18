// Table of Content Controller

var toc = (function() {
    'use strict'

    // Datastore for ISA's Slide IDs
    var _links = {
        //ID: 'Tracking ' // Page name  

        // Global Header Content links
        1000: 'PRI', // Prescribing Information (Synvisc-One)
        2000: 'ISI', // Important Safety Information
        3000: 'REF', // References

        3001: 'CVI', // Crosslinking Video
        3002: 'MEV', // Manufacturing Excellence Video
        3003: '3DK', // 3D Knee - [From the Launch Pad]

        // Slide Links 
        1: 'LAU', // Launch Pad
        2: 'CVH', // Core Visual Aid Home
        3: 'INT', // Introduction
        4: 'EFH', // Efficacy Home
        5: 'SEF', // SYNVISC Efficacy
        6: 'SOE', // Synvisc-One Efficacy
        7: 'EVH', // Evidence Home
        8: 'SVP', // SYNVISC Versus Placebo
        9: 'SOE', // Synvisc-One Evidence
        10: 'SVH', // SYNVISC Versus Hyalgan
        11: 'SVI', // SYNVISC Versus ICS
        12: 'SVN', // SYNVISC Versus NSAIDS
        13: 'EXH', // Experience Home
        14: 'SCI', // Science
        15: 'VCO', // Viscosupplement Comparison
        16: 'CRO', // Crosslinking 
        17: 'SAH', // Safety Home
        18: 'SAE', // SYNVISC AEs
        19: 'SOA', // Synvisc-One AEs
        20: 'OAK', // OAK Incidence
        21: 'SAF_REF', // References
        22: 'PSU', // Patient Support
        23: 'DAH', // Dosing and Administration
        24: 'DOS_REF', // References
        25: 'MHO', // Manufacturing Excellence Home
        26: 'BIH', // Bibilography Home
        27: '',
    };

    // Exposed API for the Table of Content Controller
    return {
        links: _links
    }
})();