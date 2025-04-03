import type { Attribute, Schema } from '@strapi/strapi';

export interface AtomesButton extends Schema.Component {
  collectionName: 'components_atomes_buttons';
  info: {
    description: '';
    displayName: 'button';
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
    description: '';
    displayName: 'citation';
  };
  attributes: {
    auteur: Attribute.String;
    citation: Attribute.Text;
  };
}

export interface AtomesFormContent extends Schema.Component {
  collectionName: 'components_atomes_form_contents';
  info: {
    description: '';
    displayName: 'formContent';
  };
  attributes: {
    emailLabel: Attribute.String;
    first_name: Attribute.String;
    messageLabel: Attribute.Text;
    nameLabel: Attribute.String;
    submitLabel: Attribute.String;
  };
}

export interface AtomesHeading extends Schema.Component {
  collectionName: 'components_atomes_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    sousTitre: Attribute.String;
    titre: Attribute.String;
  };
}

export interface AtomesImageandlink extends Schema.Component {
  collectionName: 'components_atomes_image_and_links';
  info: {
    displayName: 'imageAndLink';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Lien: Attribute.String;
  };
}

export interface AtomesInputForm extends Schema.Component {
  collectionName: 'components_atomes_input_forms';
  info: {
    description: '';
    displayName: 'InputLabel';
  };
  attributes: {
    idAndName: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface AtomesModulePhotoVideo extends Schema.Component {
  collectionName: 'components_atomes_module_photo_videos';
  info: {
    description: '';
    displayName: 'module_photo_video';
  };
  attributes: {
    Avis_expert: Attribute.Component<'molecules.avis-expert', true>;
    background_color: Attribute.String;
    body: Attribute.Blocks;
    body_2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    paragraph_color: Attribute.String;
  };
}

export interface AtomesNumerotation extends Schema.Component {
  collectionName: 'components_widget_numerotations';
  info: {
    description: '';
    displayName: 'numerotation';
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
    description: '';
    displayName: 'TexteRepetable';
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
    description: '';
    displayName: 'single_icone_collaborateur';
  };
  attributes: {
    auteur_citation: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sousTitre: Attribute.Text;
    titre: Attribute.String;
  };
}

export interface AtomesVignette extends Schema.Component {
  collectionName: 'components_atomes_vignettes';
  info: {
    description: '';
    displayName: 'vignette';
  };
  attributes: {
    buttonLabel: Attribute.String;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    image: Attribute.Media<'images'>;
    lien: Attribute.String;
    titre: Attribute.String;
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
    description: '';
    displayName: 'avis_expert';
  };
  attributes: {
    background_color: Attribute.String;
    citation: Attribute.Text;
    nom: Attribute.String;
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    source: Attribute.String;
  };
}

export interface MoleculesBandeauTextePhoto extends Schema.Component {
  collectionName: 'components_molecules_bandeau_texte_photos';
  info: {
    description: '';
    displayName: 'Bandeau_texte_photo';
  };
  attributes: {
    background_color: Attribute.String;
    CTA: Attribute.Component<'molecules.cta'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph_color: Attribute.String;
    Position: Attribute.Enumeration<['texte_gauche', 'texte_droite']>;
    texte: Attribute.Text;
    title_color: Attribute.String;
    titre: Attribute.String;
  };
}

export interface MoleculesContactForm extends Schema.Component {
  collectionName: 'components_widget_contact_forms';
  info: {
    description: '';
    displayName: 'contactForm';
  };
  attributes: {
    errorMessage: Attribute.String;
    formContent: Attribute.Component<'atomes.form_content'>;
    heading: Attribute.Component<'atomes.heading'>;
    missingFieldMessage: Attribute.String;
    object_option: Attribute.Component<'atomes.raison', true>;
    successMessage: Attribute.String;
  };
}

export interface MoleculesCta extends Schema.Component {
  collectionName: 'components_molecules_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    attribut_title: Attribute.String;
    background_color: Attribute.String;
    font_color: Attribute.String;
    hover_background_color: Attribute.String;
    hover_font_color: Attribute.String;
    link: Attribute.String;
    Ouvrir_dans_une_nouvelle_fenetre: Attribute.Boolean &
      Attribute.DefaultTo<true>;
    texte: Attribute.String;
  };
}

export interface MoleculesModulePictoTrombi extends Schema.Component {
  collectionName: 'components_molecules_module_picto_trombis';
  info: {
    description: '';
    displayName: 'module_picto_trombi';
  };
  attributes: {
    background_color: Attribute.String;
    Body_section: Attribute.Blocks;
    Body_section_2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    heading_color: Attribute.String;
    module_picto_collaborateur: Attribute.Component<
      'atomes.single-icone-collaborateur',
      true
    >;
    paragraph_color: Attribute.Text;
    sousTitre: Attribute.String;
    titre: Attribute.String;
    titre_icons_group: Attribute.String;
    type: Attribute.Enumeration<['Icone', 'Collaborateur', 'Citations']>;
  };
}

export interface MoleculesPartenariats extends Schema.Component {
  collectionName: 'components_widget_partenariats';
  info: {
    description: '';
    displayName: 'partenariats';
  };
  attributes: {
    background_color: Attribute.String;
    heading: Attribute.Component<'atomes.heading'>;
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
    description: '';
    displayName: 'PersonnalisationForm';
  };
  attributes: {
    baseEfoPerso: Attribute.Media<'images'>;
    baseEfoPersoVertical: Attribute.Media<'images'>;
    baseEfoSlogan: Attribute.Media<'images'>;
    baseEfoSloganVertical: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CGV: Attribute.Component<'atomes.input-form'>;
    createVerso: Attribute.Component<'atomes.button'>;
    Heading: Attribute.Component<'atomes.heading'>;
    imageUploadTitle: Attribute.String;
    lang: Attribute.String;
    lienCGV: Attribute.String;
    lienGuide: Attribute.String;
    orientationId: Attribute.String;
    orientationOption: Attribute.Component<'atomes.input-form', true>;
    orientationTitre: Attribute.String;
    PersoCanvasSubtitle: Attribute.String;
    PersoCanvasTitle: Attribute.String;
    radioPlaneteId: Attribute.String;
    radioPlanetelabels: Attribute.Component<'atomes.input-form', true>;
    SloganCanvasSubtitle: Attribute.String;
    SloganCanvasTitle: Attribute.String;
    sloganInput: Attribute.Component<'atomes.input-form'>;
    sloganTitre: Attribute.String;
    submitButton: Attribute.Component<'atomes.button'>;
    TextChoixDuFond: Attribute.Text;
    titreLienCGV: Attribute.String;
    titreLienGuide: Attribute.String;
    typeId: Attribute.String;
    typeLabel: Attribute.String;
    typeOption: Attribute.Component<'atomes.input-form', true>;
    uploadLabel: Attribute.String;
    uploadTexte: Attribute.String;
  };
}

export interface MoleculesSomeActions extends Schema.Component {
  collectionName: 'components_molecules_some_actions';
  info: {
    description: '';
    displayName: 'someActions';
  };
  attributes: {
    titrage: Attribute.Component<'atomes.heading', true>;
  };
}

export interface MoleculesVignetteComponent extends Schema.Component {
  collectionName: 'components_molecules_vignette_components';
  info: {
    description: '';
    displayName: 'VignetteComponent';
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
