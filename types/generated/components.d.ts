import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomesButton extends Schema.Component {
  collectionName: 'components_atomes_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    buttonLabel: Attribute.String;
    buttonTitle: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomesCitation extends Schema.Component {
  collectionName: 'components_widget_citations';
  info: {
    displayName: 'citation';
    description: '';
  };
  attributes: {
    citation: Attribute.Text;
    auteur: Attribute.String;
  };
}

export interface AtomesFormContent extends Schema.Component {
  collectionName: 'components_atomes_form_contents';
  info: {
    displayName: 'formContent';
    description: '';
  };
  attributes: {
    nameLabel: Attribute.String;
    messageLabel: Attribute.Text;
    submitLabel: Attribute.String;
    emailLabel: Attribute.String;
    first_name: Attribute.String;
  };
}

export interface AtomesHeading extends Schema.Component {
  collectionName: 'components_atomes_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    titre: Attribute.String;
    sousTitre: Attribute.String;
  };
}

export interface AtomesImageandlink extends Schema.Component {
  collectionName: 'components_atomes_image_and_links';
  info: {
    displayName: 'imageAndLink';
  };
  attributes: {
    image: Attribute.Media;
    Lien: Attribute.String;
  };
}

export interface AtomesInputForm extends Schema.Component {
  collectionName: 'components_atomes_input_forms';
  info: {
    displayName: 'InputLabel';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    idAndName: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface AtomesModulePhotoVideo extends Schema.Component {
  collectionName: 'components_atomes_module_photo_videos';
  info: {
    displayName: 'module_photo_video';
    description: '';
  };
  attributes: {
    media: Attribute.Media;
    body: Attribute.Blocks;
    Avis_expert: Attribute.Component<'molecules.avis-expert', true>;
    background_color: Attribute.String;
    paragraph_color: Attribute.String;
  };
}

export interface AtomesNumerotation extends Schema.Component {
  collectionName: 'components_widget_numerotations';
  info: {
    displayName: 'numerotation';
    description: '';
  };
  attributes: {
    number: Attribute.String;
    raison: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface AtomesRaison extends Schema.Component {
  collectionName: 'components_widget_raisons';
  info: {
    displayName: 'TexteRepetable';
    description: '';
  };
  attributes: {
    texte: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface AtomesSingleIconeCollaborateur extends Schema.Component {
  collectionName: 'components_atomes_single_icone_collaborateurs';
  info: {
    displayName: 'single_icone_collaborateur';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    sousTitre: Attribute.Text;
    image: Attribute.Media;
    auteur_citation: Attribute.String;
  };
}

export interface AtomesVignette extends Schema.Component {
  collectionName: 'components_atomes_vignettes';
  info: {
    displayName: 'vignette';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    lien: Attribute.String;
    buttonLabel: Attribute.String;
    vocation: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface MoleculesActionsVignettes extends Schema.Component {
  collectionName: 'components_molecules_actions_vignettes';
  info: {
    displayName: 'ActionsVignettes';
  };
  attributes: {
    single_actions: Attribute.Relation<
      'molecules.actions-vignettes',
      'oneToMany',
      'api::single-action.single-action'
    >;
    titre: Attribute.Component<'atomes.heading'>;
  };
}

export interface MoleculesAvisExpert extends Schema.Component {
  collectionName: 'components_molecules_avis_experts';
  info: {
    displayName: 'avis_expert';
    description: '';
  };
  attributes: {
    citation: Attribute.Text;
    nom: Attribute.String;
    source: Attribute.String;
    photo: Attribute.Media;
    background_color: Attribute.String;
  };
}

export interface MoleculesBandeauTextePhoto extends Schema.Component {
  collectionName: 'components_molecules_bandeau_texte_photos';
  info: {
    displayName: 'Bandeau_texte_photo';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    texte: Attribute.Text;
    image: Attribute.Media;
    CTA: Attribute.Component<'molecules.cta'>;
    Position: Attribute.Enumeration<['texte_gauche', 'texte_droite']>;
    background_color: Attribute.String;
    title_color: Attribute.String;
    paragraph_color: Attribute.String;
  };
}

export interface MoleculesContactForm extends Schema.Component {
  collectionName: 'components_widget_contact_forms';
  info: {
    displayName: 'contactForm';
    description: '';
  };
  attributes: {
    successMessage: Attribute.String;
    errorMessage: Attribute.String;
    missingFieldMessage: Attribute.String;
    formContent: Attribute.Component<'atomes.form_content'>;
    heading: Attribute.Component<'atomes.heading'>;
    object_option: Attribute.Component<'atomes.raison', true>;
  };
}

export interface MoleculesCta extends Schema.Component {
  collectionName: 'components_molecules_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    texte: Attribute.String;
    link: Attribute.String;
    attribut_title: Attribute.String;
    Ouvrir_dans_une_nouvelle_fenetre: Attribute.Boolean &
      Attribute.DefaultTo<true>;
    background_color: Attribute.String;
    font_color: Attribute.String;
    hover_background_color: Attribute.String;
    hover_font_color: Attribute.String;
  };
}

export interface MoleculesModulePictoTrombi extends Schema.Component {
  collectionName: 'components_molecules_module_picto_trombis';
  info: {
    displayName: 'module_picto_trombi';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    sousTitre: Attribute.String;
    module_picto_collaborateur: Attribute.Component<
      'atomes.single-icone-collaborateur',
      true
    >;
    type: Attribute.Enumeration<['Icone', 'Collaborateur', 'Citations']>;
    Body_section: Attribute.Blocks;
    titre_icons_group: Attribute.String;
    background_color: Attribute.String;
    heading_color: Attribute.String;
    paragraph_color: Attribute.Text;
  };
}

export interface MoleculesPartenariats extends Schema.Component {
  collectionName: 'components_widget_partenariats';
  info: {
    displayName: 'partenariats';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'atomes.heading'>;
    background_color: Attribute.String;
    partenaires: Attribute.Relation<
      'molecules.partenariats',
      'oneToMany',
      'api::partenaire.partenaire'
    >;
  };
}

export interface MoleculesPersonnalisationForm extends Schema.Component {
  collectionName: 'components_molecules_personnalisation_forms';
  info: {
    displayName: 'PersonnalisationForm';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'atomes.heading'>;
    typeLabel: Attribute.String;
    typeOption: Attribute.Component<'atomes.input-form', true>;
    orientationTitre: Attribute.String;
    orientationOption: Attribute.Component<'atomes.input-form', true>;
    sloganTitre: Attribute.String;
    sloganInput: Attribute.Component<'atomes.input-form'>;
    CGV: Attribute.Component<'atomes.input-form'>;
    uploadLabel: Attribute.String;
    uploadTexte: Attribute.String;
    submitButton: Attribute.Component<'atomes.button'>;
    createVerso: Attribute.Component<'atomes.button'>;
    baseEfoSlogan: Attribute.Media;
    baseEfoPerso: Attribute.Media;
    lienGuide: Attribute.String;
    lienCGV: Attribute.String;
    titreLienCGV: Attribute.String;
    titreLienGuide: Attribute.String;
    baseEfoSloganVertical: Attribute.Media;
    baseEfoPersoVertical: Attribute.Media;
    TextChoixDuFond: Attribute.Text;
    typeId: Attribute.String;
    orientationId: Attribute.String;
    radioPlaneteId: Attribute.String;
    imageUploadTitle: Attribute.String;
    radioPlanetelabels: Attribute.Component<'atomes.input-form', true>;
    SloganCanvasTitle: Attribute.String;
    SloganCanvasSubtitle: Attribute.String;
    PersoCanvasTitle: Attribute.String;
    PersoCanvasSubtitle: Attribute.String;
    lang: Attribute.String;
  };
}

export interface MoleculesSomeActions extends Schema.Component {
  collectionName: 'components_molecules_some_actions';
  info: {
    displayName: 'someActions';
    description: '';
  };
  attributes: {
    titrage: Attribute.Component<'atomes.heading', true>;
  };
}

export interface MoleculesVignetteComponent extends Schema.Component {
  collectionName: 'components_molecules_vignette_components';
  info: {
    displayName: 'VignetteComponent';
    description: '';
  };
  attributes: {
    titre: Attribute.Component<'atomes.heading'>;
    vignettes: Attribute.Component<'atomes.vignette', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atomes.button': AtomesButton;
      'atomes.citation': AtomesCitation;
      'atomes.form_content': AtomesFormContent;
      'atomes.heading': AtomesHeading;
      'atomes.imageandlink': AtomesImageandlink;
      'atomes.input-form': AtomesInputForm;
      'atomes.module-photo-video': AtomesModulePhotoVideo;
      'atomes.numerotation': AtomesNumerotation;
      'atomes.raison': AtomesRaison;
      'atomes.single-icone-collaborateur': AtomesSingleIconeCollaborateur;
      'atomes.vignette': AtomesVignette;
      'molecules.actions-vignettes': MoleculesActionsVignettes;
      'molecules.avis-expert': MoleculesAvisExpert;
      'molecules.bandeau-texte-photo': MoleculesBandeauTextePhoto;
      'molecules.contact-form': MoleculesContactForm;
      'molecules.cta': MoleculesCta;
      'molecules.module-picto-trombi': MoleculesModulePictoTrombi;
      'molecules.partenariats': MoleculesPartenariats;
      'molecules.personnalisation-form': MoleculesPersonnalisationForm;
      'molecules.some-actions': MoleculesSomeActions;
      'molecules.vignette-component': MoleculesVignetteComponent;
    }
  }
}
