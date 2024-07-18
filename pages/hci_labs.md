---
layout: page-fullwidth
title: "HCI labs in Germany"
header: no
permalink: "/hci_labs/"
parent: "labs"
---
<div>
{% assign querys = site.data[page.parent] %}
{% for lab in site.data.labs %}
    <h1> {{ data.name }} </h1>
    <h4> {{ lab.university }} , {{ lab.city }} </h4>
    <p> {{ lab.info }} </p>
{% endfor %}
</div>

<!-- {% include _hci_labs.html %} -->

<!-- [Media Computing Group at RWTH Aachen (Jan Borchers and others)](https://hci.rwth-aachen.de)

## | Bamberg
[Human-Computer Interaction Group at Universität Bamberg (Tom Gross and others)](https://www.uni-bamberg.de/en/hci/team/tom-gross/)

## | Bayreuth
- [Mobile Intelligent User Interfaces at Universität Bayreuth (Daniel Buschek and others)](https://www.hciai.uni-bayreuth.de/en/index.html)

- [Serious Games at Universität Bayreuth (Jörg Müller and others)](https://www.ai8.uni-bayreuth.de/en/index.html)

## | Berlin
[Cognitive Interaction and Sensing Group at HU Berlin (Thomas Kosch and others)](https://cognisense.group)

## | Bochum
- [Digital Sovereignty Lab (DigiSoul) at Ruhr-Universität Bochum (Karola Marky and others)](https://casa.rub.de/forschung/publikationen/autor/Karola-Marky)

- [Human-Centered Security and Privacy at Max Planck Institute for Security and Privacy](https://www.mpi-sp.org/zou) [Yixin Zou and others](https://yixinzou.github.io/)

- [Responsible Computing at Max Planck Institute for Security and Privacy (Asia J. Biega and others)](https://www.mpi-sp.org/biega)

## | Bremen
[Digital Media Lab at the University of Bremen (Rainer Malaka and others)](http://dm.tzi.de)

## | Chemnitz
- [Media Informatics Group at TU Chemnitz (Maximilian Eibl and others)](https://www.tu-chemnitz.de/informatik/Medieninformatik/)

## | Darmstadt
- [Telecooperation Group at TU Darmstadt (Max Mühlhäuser and others)](https://www.informatik.tu-darmstadt.de/telekooperation/telecooperation_group/index.en.jsp)

- [Science and Technology for Peace and Security at TU Darmstadt (Christian Reuter and others)](https://peasec.de)

## | Dortmund
[Inclusive Human-Robot Interaction Group at TU Dortmund University (Jens Gerken and others)](https://ihri.reha.tu-dortmund.de)

## | Dresden
- [Interactive Media Lab at TU Dresden (Raimund Dachselt and others)](https://imld.de/en/)

- [Human-Computer Interaction (Gerhard Weber and others)](https://tu-dresden.de/ing/informatik/ai/mci) 

## | Duisburg
- [Interactive Systems Group at University Duisburg-Essen (formerly: Jürgen Ziegler and others)](http://interactivesystems.info/)

- [Interactive Systems Group at University Duisburg-Essen (currently: Michael Prilla and others)](https://interaktive-systeme-ude.de/)

## | Essen
[Human-Computer Interaction Group at University Duisburg-Essen (Stefan Schneegaß and others)](https://www.hci.wiwi.uni-due.de/)

## | Frankfurt am Main
[Mixed Reality Lab at the Frankfurt university of Applied Sciences (Valentin Schwind and others)](www.frankfurt-university.de/mixed-reality-lab)

## | Freiberg
[Professur für Ubiquitous Computing and Smart Systems at University Freiberg (Bastian Pflegling and others)](https://tu-freiberg.de/ubisys)

## | Hamburg
[Human-Computer Interaction Group at Universität Hamburg (Frank Steinicke and others)](https://www.inf.uni-hamburg.de/en/inst/ab/hci.html)

## | Hannover
[Human-Computer Interaction Group at University Hannover (Michael Ross and others)](http://hci.uni-hannover.de/)

## | Heilbronn
[UniTyLab at University of Applied Sciences Heilbronn (Gerrit Meixner and others)](https://www.hs-heilbronn.de/de/unitylab)

## | Ingolstadt
[Human Factors and Driving Ergonomics-Group (Andreas Riener and others)](https://www.thi.de/informatik/personen-i/prof-dr-techn-priv-doz-andreas-riener-1/)

## | Karlsruhe
- [Human-Computer Interaction and Accessibility (Kathrin Gerling and team)](https://hci.anthropomatik.kit.edu/)

- [Computer Vision for Human-Computer Interaction Lab (cv:hci) (Rainer Stiefelhagen and team)](https://cvhci.anthropomatik.kit.edu/)

- [Human-Centered Systems Lab (h-lab) (Alexander Maedche and team)](https://h-lab.iism.kit.edu/)

## | Konstanz
[Human-Computer Interaction Group at University of Konstanz (Harald Reiterer, Tiare Feuchtner and others)](https://hci.uni-konstanz.de)

## | Lemgo
[Human-Technology Interaction Group at OWL University of Applied Sciences and Arts (Carsten Röcker and others)](https://www.init-owl.de/forschung/forschungsgruppen/mensch-technik-interaktion/)

## | Lübeck
[Institute for Multimedia and Interactive Systems (IMIS) at Universität zu Lübeck (Hans-Christian Jetter and others)](https://www.imis.uni-luebeck.de/en)

## | München
- [Media Informatics and Human-Computer Interaction Groups at Ludwig Maximilians Universität München (Andreas Butz, Albrecht Schmidt, Sven Mayer and others)](https://www.mmi.ifi.lmu.de/index.xhtml)

- [Human-Computer Interaction and Computer-Supported Cooperative Systems group at Universität der Bundeswehr München (Michael Koch and others)](https://www.unibw.de/inf2/mci/)

- [Usable Security and Privacy group at Universität der Bundeswehr München (Florian Alt and others)](https://www.unibw.de/anwendungssicherheit/usable-security-and-privacy)

## | Oldenburg
[Media Informatics and Multimedia Systems Group at Universität Oldenburg (Susanne Boll and others)](https://www.uni-oldenburg.de/en/media-informatics/)

## | Potsdam
[Human Computer Interaction Lab at Hasso-Plattner Institute Potsdam (Patrick Baudisch and others)](https://hpi.de/baudisch/home.html)

## | Regensburg
[Media Informatics Group at Regensburg University (Niels Henze, Raphael Wimmer, Christian Wolff and others)](http://mi.ur.de)

## | Saarbrücken
- [Human-Computer Interaction at Saarland University in Saarbrücken (Jürgen Steimle and others)](https://hci.cs.uni-saarland.de)

- [Ubiquitous Media Technology Lab / Human Factors in Interactive Systems Group at the German Research Center for Artificial Intelligence (DFKI) and Saarland University in Saarbrücken (Antonio Krüger and team)](https://umtl.cs.uni-saarland.de)

- [Computational Interaction Group (Anna-Maria Feit and others)](https://cix.cs.uni-saarland.de/)

## | Siegen
- [Information Systems and New Media group at Universität Siegen (Volker Wulf, Gunnar Stevens, Claudia Müller, Markus Rohde and others)](http://www.wineme.uni-siegen.de/en/)

- [Computer Supported Cooperative Work and Social Media group at Universität Siegen (Volkmar Pipek and others)](http://www.cscw.uni-siegen.de/?lang=en)

## | Stuttgart
- [Human-Computer Interaction and Cognitive Systems Group at University of Stuttgart (Andreas Bulling and others)](https://www.perceptualui.org/)

- [Augmented Reality and Virtual Reality Group at University of Stuttgart (Michael Sedlmair and others)](https://www.visus.uni-stuttgart.de/en/team/by_working_group/working-group-prof.-sedlmair/)

- [Visual Computing at University of Stuttgart (Dieter Schmalstieg and others)](https://www.visus.uni-stuttgart.de/en/institute/workinggroups/schmalstieg-group/)

## | Ulm
[Human-Computer Interaction Group at Ulm University (Enrico Rukzio and others)](https://www.uni-ulm.de/in/mi/hci)

## | Weimar
[Human-Computer Interaction group at Bauhaus-Universität Weimar (Eva Hornecker and others)](https://www.uni-weimar.de/de/medien/professuren/human-computer-interaction/)

## | Würzburg
- [Human-Computer Interaction group at Würzburg Universität (Marc Erich Latoschik and others)](http://www.hci.uni-wuerzburg.de)

- [Psychological Ergonomics group at Julius-Maximilians-Universität Würzburg (Jörn Hurtienne and team)](http://psyergo.uni-wuerzburg.de/)-->